CC := gcc
NODE := node

build: message bot1 bot2 bot3 bot4 ocmaRUN	

message:
	@echo "Hello, we're compiling OCMA program file bots"

bot1: src/bot_diogo_joaopaulo.c
	$(CC) $^ -o $@

bot2: src/bot_diogo_joaopaulo1.c
	$(CC) $^ -o $@

bot3: src/bot_diogo_joaopaulO2.c
	$(CC) $^ -o $@

bot4: src/bot_diogo_joaopaulo3.c
	$(CC) $^ -o $@

ocmaRUN: src/ocma.js 
	$(NODE) $^ bot1 bot2  bot3 bot4

clean: bot1 bot2 bot3 bot4
	@rm $^

reload: build
