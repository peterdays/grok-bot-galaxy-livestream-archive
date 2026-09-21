PYTHON ?= python3
HOST ?= 127.0.0.1
PORT ?= 8000

.PHONY: help run

help:
	@printf 'make run                 Start the local archive viewer\n'
	@printf 'make run PORT=8080       Start it on a different port\n'

run:
	$(PYTHON) scripts/serve.py --bind $(HOST) --port $(PORT)
