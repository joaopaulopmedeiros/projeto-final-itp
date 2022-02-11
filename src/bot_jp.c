#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define MAX_LINE 50

//ponto do mapa
typedef struct {
  bool anyOtherPlayerOnSurface; //há algum bot na superfície.
  int value; //valor encontrado no ponto. Informa se há peixe ou não, se é local de pesca etc.
} Point;

//mapa do jogo
typedef struct {
  int height; //altura do mapa
  int width; //largura do mapa
  int totalBotsPlaying; //quantidade de bots jogando
  Point** points; //pontos de que o mapa é composto 
} Map;

//estoque de peixes do bot
typedef struct {
  int totalTainhas;
  int totalCiobas; 
  int totalRobalos;
} Stock;

typedef struct {
  char id[MAX_LINE]; //id do meu jogador ou bot
  int x; //coord x
  int y; //coord y  
  Stock stock; //estoque de peixes
} Player;

//informa se ponto é apenas mar aberto
bool isEmptySeaArea(int value) {
  if(value == 0) {
    return true;
  } else {
    return false;
  }
}

//informa se ponto é um porto
bool isHarborArea(int value) {
  if(value == 1) {
    return true;
  } else {
    return false;
  }
}

//informa se é região proibida para pesca (há zero quilos de qualquer um dos três tipos de peixe)
bool isForbbidenFishingArea(int value) {
  if(value == 10 || value == 20 || value == 30) {
    return true;
  } else {
    return false;
  }
}

//informa se estoque está vazio
bool isEmptyStock(Stock stock) {
  if(stock.totalCiobas + stock.totalRobalos + stock.totalTainhas <= 0) {
    return true;
  } else {
    return false;
  }
}

//escolhe comando do bot (movimentação, pesca ou venda) conforme situação do mapa
char* chooseCommand(Player* player, Map* map) {
  int distance = 1; //distância entre ponto e meu usuário - neste caso, varre uma casa

  //valor encontrado na posição atual do bot
  int value = map->points[player->x][player->y].value;

  char* command = malloc(sizeof(char) * 10);

  command = "LEFT";

  if(isHarborArea(value) && !isEmptyStock(player->stock)) {
    //command = sell();
  } else if(!isForbbidenFishingArea(value)) {
    //command = fish();
  } else {
    //command = move();
  }

  return command;
}

// lê os dados do jogo e atualiza o mapa conforme posições dos bots adversários
void readData(Player* player, Map* map) {
  map->points = malloc(map->height * sizeof(Point*));

  for (int i = 0; i < map->height; i++){
    map->points[i] = malloc(map->width * sizeof(Point));
  }

  for (int i = 0; i < map->height; i++) {   
    for (int j = 0; j < map->width; j++) {
      //seta valor presente em ponto
      scanf("%i", &map->points[i][j].value);
    }
  }

  char id[MAX_LINE];
  
  int v, x, y;

  //seta quantidade total de bots
  scanf(" BOTS %i", &map->totalBotsPlaying); 

  for (int i = 0; i < map->totalBotsPlaying; i++) {
    scanf("%s %i %i", id, &x, &y); 

    //se id for do meu bot, atualizar minha posição
    if(strcmp(player->id, id) == 0) {
      player->x = x;
      player->y = y;
    };
    
    //seta que há ao menos um bot na superfície do ponto
    map->points[x][y].anyOtherPlayerOnSurface = true;
  }
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
    char* command = chooseCommand(&player, &map);
    printf("%s\n", command);
    scanf("%s", line);
  }

  return 0;
}