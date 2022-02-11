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

// lê os dados do jogo e atualiza os dados do bot
void readData(char* myId, Map* map) {
  char id[MAX_LINE];
  int v, n, x, y;

  for (int i = 0; i < map->height; i++) {   
    for (int j = 0; j < map->width; j++) {
      scanf("%i", &v);
    }
  }

  //lê a quantidade de bots
  scanf(" BOTS %i", &n); 
  for (int i = 0; i < n; i++) {
    // lê o id dos bots e suas posições
    scanf("%s %i %i", id, &x, &y); 
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

  while (1) {
    readData(myId, &map);
    char* command = chooseCommand(&map);
    printf("%s\n", command);
    scanf("%s", line);
  }
  return 0;
}