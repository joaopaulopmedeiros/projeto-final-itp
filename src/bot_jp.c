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

typedef struct {
  int totalBotsPlaying;
  char id[MAX_LINE];
} Player;

// lê os dados do jogo e atualiza os dados do bot
void readData(Player* player, Map* map) {
  char id[MAX_LINE];
  int v, x, y;

  for (int i = 0; i < map->height; i++) {   
    for (int j = 0; j < map->width; j++) {
      scanf("%i", &v);
    }
  }

  //lê a quantidade de bots
  scanf(" BOTS %i", &player->totalBotsPlaying); 

  for (int i = 0; i < player->totalBotsPlaying; i++) {
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
  Map map;
  Player player;

  setbuf(stdin, NULL);
  setbuf(stdout, NULL); 
  setbuf(stderr, NULL);

  scanf("AREA %i %i", &map.height, &map.width);
  scanf(" ID %s", player.id);    
  fprintf(stderr, "%s\n", player.id);

  while (1) {
    readData(&player, &map);
    char* command = chooseCommand(&map);
    printf("%s\n", command);
    scanf("%s", line);
  }
  return 0;
}