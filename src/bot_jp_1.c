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
  if(value = 1 || value == 10 || value == 11 || value == 20 || value == 21 || value == 30 || value == 31) {
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
  if(stock.total == 10) {
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
  return map->points[player->x][player->y+distance].value;
}

int getValueFromHorizontalCoord(Map* map, Player* player, int distance) {
  return map->points[player->x+distance][player->y].value;
}

enum Position {
  up,
  right,
  down,
  left,
};

//movimenta bot em função da posição atual (coord x e y)
char* move(Player* player, Map* map) {
  int distance = 1; //distância entre ponto e meu usuário - neste caso, varre uma casa
  int positions[4] = {0};

  //se limitado à esquerda, direita, cima, ou baixo
  if(player->y == 0 || player->y == map->width-1 || player->x == 0 || player->x == map->width-1) {
    //veja se 
    //posso ir para cima
    if(player->x != 0) {
      positions[up] = getValueFromVerticalCoord(map, player, distance);
    }
    //posso ir para baixo
    if(player->x != map->width-1) {   
      positions[down] = getValueFromVerticalCoord(map, player, -distance);
    }

    //posso me mover à esquerda
    if(player->y != 0) {
      positions[left] = getValueFromHorizontalCoord(map, player, -distance);
    }
    //posso me mover à direita
    if(player->y != map->width-1) {
      positions[right] = getValueFromHorizontalCoord(map, player, distance);
    }
  } 
  //sem limites, igual à liga da justiça
  else {
    positions[up] = getValueFromVerticalCoord(map, player, distance);
    positions[right] = getValueFromHorizontalCoord(map, player, distance);
    positions[down] = getValueFromVerticalCoord(map, player, -distance);
    positions[left] = getValueFromHorizontalCoord(map, player, -distance);
  }

  int highest = 0;

  for(int i = 0; i < 4; i++) {
    if(i > 0) {
      if(positions[i]-positions[i-1] > 0) {
        highest = i;
      }
    }
  }

  if(highest == up) {
    return "UP";
  } else if(highest == right) {
    return "RIGHT";
  } else if(highest == down) {
    return "DOWN";
  } else {
    return "LEFT";
  }
}

//escolhe comando do bot (movimentação, pesca ou venda) conforme situação do mapa
char* chooseCommand(Player* player, Map* map) {
  //valor encontrado na posição atual do bot
  int value = map->points[player->x][player->y].value;

  char* command = malloc(sizeof(char) * 10);

  if(isHarborArea(value) && !isEmptyStock(player->stock)) {
    command = "SELL";
  } else if(!isForbbidenFishingArea(value) && !isFullStock(player->stock)) {
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
      player->x = x;
      player->y = y;
    };
    
    //seta que há ao menos um bot na superfície do ponto
    map->points[x][y].anyOtherPlayerOnSurface = true;
  }
}

//reage ao resultado de comandos do bot
void react(Player* player, char* command, char* result) {
  fprintf(stderr, "comando %s\n", command);
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