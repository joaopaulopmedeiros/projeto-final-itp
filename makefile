CC := gcc
NODE := node

build: message bot1 bot2 ocmaRUN	

message:
	@echo "Hello, we're compiling OCMA program file bots"

bot1: src/bot_jp.c
	$(CC) $^ -o $@

bot2: src/bot_jp_1.c
	$(CC) $^ -o $@

ocmaRUN: src/ocma.js 
	$(NODE) $^ bot1 bot2

clean: bot1 bot2
	@rm $^

reload: build
