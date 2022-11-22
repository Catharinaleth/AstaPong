// Startside 
let state = "side1";

// point variabel 
let point = 0;

// Variabel for billeder
let baggrund
let drinkBillede;
let beerBillede;
let astaBillede;

//variabler for billederne 
let drink = {
  x: 0,
  y: 0,
  velx: 3,
  vely: 3
}

let as = {
  x: 200,  
  y: 410,
  w: 60,
  h: 50,
  velx: 0,
  vely: 0,
}

let beer = {
  x: 650,
  y: 0,
  velx: -2,
  vely: -2
}


function setup() {
  createCanvas(700, 500);

// opload af billeder
  baggrund = loadImage('Billeder/asbag.png');
  drinkBillede = loadImage('Billeder/drink.png');
  beerBillede = loadImage("Billeder/beer.png");
  astaBillede = loadImage('Billeder/asta.png');
  
}

function draw() {
  noStroke();
  fill(250);
  textAlign(CENTER, CENTER);

//Kalder funktioner
  sideskift(); 
  keyDown();
  kollision();
  gameover();
}
