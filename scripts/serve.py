#!/usr/bin/env python3
"""Serve the archive locally with HTTP byte ranges for instant video seeking."""

from __future__ import annotations

import argparse
import os
import re
import shutil
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


RANGE_RE = re.compile(r"bytes=(\d*)-(\d*)$")


class RangeRequestHandler(SimpleHTTPRequestHandler):
    range: tuple[int, int] | None = None

    def end_headers(self) -> None:
        self.send_header("Accept-Ranges", "bytes")
        super().end_headers()

    def send_head(self):
        self.range = None
        path = self.translate_path(self.path)
        if os.path.isdir(path) or not self.headers.get("Range"):
            return super().send_head()

        try:
            source = open(path, "rb")
        except OSError:
            self.send_error(404, "File not found")
            return None

        size = os.fstat(source.fileno()).st_size
        match = RANGE_RE.fullmatch(self.headers["Range"].strip())
        if not match or (not match.group(1) and not match.group(2)):
            source.close()
            self.send_error(400, "Invalid Range header")
            return None

        if match.group(1):
            start = int(match.group(1))
            end = int(match.group(2)) if match.group(2) else size - 1
        else:
            length = int(match.group(2))
            start = max(0, size - length)
            end = size - 1

        if start >= size or start > end:
            source.close()
            self.send_response(416)
            self.send_header("Content-Range", f"bytes */{size}")
            self.end_headers()
            return None

        end = min(end, size - 1)
        self.range = (start, end)
        self.send_response(206)
        self.send_header("Content-type", self.guess_type(path))
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Content-Length", str(end - start + 1))
        self.send_header("Last-Modified", self.date_time_string(os.fstat(source.fileno()).st_mtime))
        self.end_headers()
        return source

    def copyfile(self, source, outputfile) -> None:
        if self.range is None:
            shutil.copyfileobj(source, outputfile)
            return
        start, end = self.range
        source.seek(start)
        remaining = end - start + 1
        while remaining:
            chunk = source.read(min(1024 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8000)
    parser.add_argument("--bind", default="127.0.0.1")
    parser.add_argument("--directory", type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()

    handler = lambda *items, **kwargs: RangeRequestHandler(  # noqa: E731
        *items, directory=str(args.directory.resolve()), **kwargs
    )
    server = ThreadingHTTPServer((args.bind, args.port), handler)
    print(f"Grokbot digest: http://{args.bind}:{args.port}/docs/", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
