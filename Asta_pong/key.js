function keyPressed() {
  if (state == "side1") {
    state = "side2";
  }
}

function keyDown() { // vil gerne ændre til keyIsDown
  // Tunge kan styres til siden. 

  if (keyIsDown(LEFT_ARROW)) {
    as.x += -6;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    as.x += 6;
  }
}
