INPUT_FILE=clock.wat
OUTPUT_FILE=clock.wasm
.PHONY: build serve
build:
	wat2wasm $(INPUT_FILE) -o $(OUTPUT_FILE) --enable-threads
show: build
	wasm2wat $(OUTPUT_FILE) --enable-threads
serve: build
	python3 server.py
