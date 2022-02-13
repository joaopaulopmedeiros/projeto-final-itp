CC := gcc
NODE := node

build: message bot1 ocmaRUN	

message:
	@echo "Hello, we're compiling OCMA program file bots"

bot1: src/bot_diogo_joaopaulo.c
	$(CC) $^ -o $@

ocmaRUN: src/ocma.js 
	$(NODE) $^ bot1

clean: bot1
	@rm $^

reload: build
