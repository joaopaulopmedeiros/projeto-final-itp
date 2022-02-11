#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_LINE 50

//ponto do mapa
typedef struct {
  int x; //coordenada x (latitude)
  int y; //coordenada y (longitude)
  int value; //valor encontrado no ponto. Informa se há peixe ou não, se é local de pesca etc.
} Point;

//mapa do jogo
typedef struct {
  int height; //altura do mapa
  int width; //largura do mapa
  Point** points; //pontos de que o mapa é composto 
} Map;

typedef struct {
  int totalBotsPlaying; //quantidade de bots jogando
  char id[MAX_LINE]; //id do meu jogador ou bot
} Player;

// atualiza os dados de todos os pontos do mapa
void updateMap(Map* map)
{
  map->points = malloc(map->height * sizeof(Point*));

  for (int i = 0; i < map->height; i++){
    map->points[i]=malloc(map->width * sizeof(Point));
  }

  for (int i = 0; i < map->height; i++) {   
    for (int j = 0; j < map->width; j++) {
      scanf("%i", &map->points[i][j].value);
    }
  }
}

// lê os dados do jogo e atualiza os dados do bot
void readData(Player* player, Map* map) {
  char id[MAX_LINE];
  int v, x, y;

  updateMap(map);

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