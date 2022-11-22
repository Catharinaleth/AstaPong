//funktion for at få isen til at bevæge sig 
function drinkMove() {
  image(drinkBillede, drink.x, drink.y, drinkBillede.width / 12, drinkBillede.height / 12);
  drink.x += drink.velx;
  drink.y += drink.vely;

  if (drink.y < 0) { //bouncer i toppen af billedet
    drink.vely = drink.vely * -1;
  }
  if (drink.x < 0) { //bouncer i venstre side af billedet
    drink.velx = drink.velx * -1;
  }
  if (drink.x > width - 30) { //bouncer i højre side af billedet
    drink.velx = drink.velx * -1;
  }

}

function beerMove() {
  image(beerBillede, beer.x, beer.y, beerBillede.width / 35, beerBillede.height / 35);
  beer.x += beer.velx;
  beer.y += beer.vely;

  if (beer.y < 0) { //bouncer i toppen af billedet
    beer.vely = beer.vely * -1;
  }
  if (beer.x < 0 - 10) { //bouncer i venstre side af billedet
    beer.velx = beer.velx * -1;
  }
  if (beer.x > width - 50) { //bouncer i højre side af billedet
    beer.velx = beer.velx * -1;
  }
}

function astaMove() {
  //Tegner tunge
  image(astaBillede, as.x, as.y, astaBillede.width / 15, astaBillede.height / 15);
  as.x += as.velx;
  as.y += as.vely;
}


