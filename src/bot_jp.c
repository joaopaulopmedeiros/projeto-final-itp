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
  int total;
} Stock;

typedef struct {
  char id[MAX_LINE]; //id do meu jogador ou bot
  int row; // posição da linha, refere-se ao movimento lateral
  int column; // posição da coluna, refere-se ao movimento vertical  
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

//informa se região é propícia para pesca (há mais de 1 peixe)
bool isFishingArea(int value) {
  if((value >= 12 && value <= 19) || (value >= 22 && value <= 29) || (value >= 32 && value <= 39)) {
    return true;
  } else {
    return false;
  }
}

//informa se estoque está vazio
bool isEmptyStock(Stock stock) {
  if(stock.total <= 0) {
    return true;
  } else {
    return false;
  }
}

//informa se estoque está cheio
bool isFullStock(Stock stock) {
  if(stock.total >= 10) {
    return true;
  } else {
    return false;
  }
}

//limpar estoque
void setZeroItemsOnStock(Stock* stock) {
  stock->total = 0;
}

//aumenta uma unidade no estoque
void addItemToStock(Stock* stock) {
  stock->total += 1;
}

int getValueFromVerticalCoord(Map* map, Player* player, int distance) {
  return map->points[player->row][player->column+distance].value;
}

int getValueFromHorizontalCoord(Map* map, Player* player, int distance) {
  return map->points[player->row+distance][player->column].value;
}

enum Position {
  up,
  right,
  down,
  left,
};

char* move(Player* player, Map* map) {
  int positions[4] = {0};

  //limitado em relação à altura do mapa
  if(player->row == 0 || player->row == map->height-1) {
    if(player->row == 0) {
      //positions[right] = map->points[player->row][player->column+1].value;
      return "RIGHT";
    }
    if(player->row == map->height-1) {
      return "LEFT";
    }
  } 
  //limitado em relação à largura do mapa
  else if(player->column == 0 || player->column == map->width-1) {
    if(player->column == 0) {
      return "LEFT";
    }
  } 
  //sem limite imposto pela dimensão do mapa
  else {
    return "DOWN";
  }
}

//escolhe comando do bot (movimentação, pesca ou venda) conforme situação do mapa
char* chooseCommand(Player* player, Map* map) {
  //valor encontrado na posição atual do bot
  int value = map->points[player->row][player->column].value;

  char* command = malloc(sizeof(char) * 10);

if(isHarborArea(value) && !isEmptyStock(player->stock)) {
    command = "SELL";
  } else if(isFishingArea(value) && !isFullStock(player->stock)) {
    command = "FISH";
  } else {
    command = move(player, map);
  }

  return command;
}

//lê os dados do jogo e atualiza o mapa conforme posições dos bots adversários
void read(Player* player, Map* map) {
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
      player->row = x;
      player->column = y;
    };
    
    //seta que há ao menos um bot na superfície do ponto
    map->points[x][y].anyOtherPlayerOnSurface = true;
  }
}

//reage ao resultado de comandos do bot
void react(Player* player, char* command, char* result) {
  if(strcmp(result, "DONE") == 0) {
    if(strcmp(command, "SELL") == 0) {
      setZeroItemsOnStock(&player->stock);
    }
    if(strcmp(command, "FISH") == 0) {
      addItemToStock(&player->stock);
    }
  }
}

int main() {
  char result[MAX_LINE];
  Map map;
  Player player;

  setZeroItemsOnStock(&player.stock);

  setbuf(stdin, NULL);
  setbuf(stdout, NULL); 
  setbuf(stderr, NULL);

  scanf("AREA %i %i", &map.height, &map.width);
  scanf(" ID %s", player.id);    
  fprintf(stderr, "%s\n", player.id);

  while (1) {
    read(&player, &map);
    char* command = chooseCommand(&player, &map);
    printf("%s\n", command);
    scanf("%s", result);
    react(&player, command, result);
  }

  return 0;
}