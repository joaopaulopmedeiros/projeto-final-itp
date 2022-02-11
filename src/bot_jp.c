#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE 50

//ponto do mapa
typedef struct {
  int value; //valor
} Point;

//mapa do jogo
typedef struct {
  int height; //altura do mapa
  int width; //largura do mapa
  Point** points; //pontos de que o mapa é composto 
} Map;

void readData(char* myId, Map* map) {
  char id[MAX_LINE];
  int v, n, x, y;

  for (int i = 0; i < map->height; i++) {   
    for (int j = 0; j < map->width; j++) {
      scanf("%i", &v);
    }
  }
  scanf(" BOTS %i", &n);           // lê a quantidade de bots
  for (int i = 0; i < n; i++) {
    scanf("%s %i %i", id, &x, &y); // lê o id dos bots e suas posições
  }
}

char* chooseCommand(Map* map)
{
  return "LEFT";
}

int main() {
  char line[MAX_LINE];
  char myId[MAX_LINE];

  setbuf(stdin, NULL);
  setbuf(stdout, NULL); 
  setbuf(stderr, NULL);

  Map map;

  scanf("AREA %i %i", &map.height, &map.width);
  scanf(" ID %s", myId);    
  fprintf(stderr, "%s\n", myId);
  // === PARTIDA === 
  while (1) {
    // LÊ OS DADOS DO JOGO E ATUALIZA OS DADOS DO BOT
    readData(myId, &map);
    // INSERIR UMA LÓGICA PARA ESCOLHER UMA AÇÃO A SER EXECUTADA
    char* command = chooseCommand(&map);
    // envia a ação escolhida
    printf("%s\n", command);
    // lê qual foi o resultado da ação (e eventualmente atualiza os dados do bot).
    scanf("%s", line);
  }
  return 0;
}