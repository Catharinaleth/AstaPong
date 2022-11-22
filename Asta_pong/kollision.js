function kollision() {
  // med drink1
  if (drink.x > as.x -as.w && drink.x < as.x + as.h &&
    drink.y > as.y - as.h && drink.y < as.y + as.w -1) {
    drink.vely = drink.vely * -1;
    point = point + 1;
  }
  //med øl
  if (beer.x > as.x - as.w && beer.x < as.x + as.h &&
    beer.y > as.y - as.h && beer.y < as.y + as.w) {
    beer.vely = beer.vely * -1;
    point = point + 1;
  }

}