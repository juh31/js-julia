
createCanvas(400, 400);
background("rgb(0,0,0)")
}

function draw() {
stroke("blue");
fill("red");


if (mouseIsPressed) {
  rect(mouseX, mouseY, 20, 35);
}
}