function sideskift() {
   //startside
  if (state == "side1") {
    background("#FA9AE5");
    textSize(25);
    stroke(4);
    text("STYR ASTA FREM OG TILBAGE FOR AT REDE", width / 2, 130);
    textSize(25);
    stroke(4);
    text("DE TO DRINKS FRA AT FALDE PÅ JORDEN", width / 2, 170);
    textSize(20);
    text("Game over hvis ølen bliver tabt", width / 2, 200);
    textSize(15);
    text("Tryk med pilen og mellemrum for at starte spillet", width / 2, 250);
  }
  //Siden til spillet
  if (state == "side2") {
    image(baggrund, -100, -100);
    astaMove();
    drinkMove();
    beerMove();
    textSize(15);
    text("Antal point :" + point, 600, 20);
    textSize(20);
    fill('lavender');
    stroke(10);
    text("ASTA 26 ÅR!", 75, 20);
 }
  
}