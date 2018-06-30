let map;
let hover = true;
let pix;
let london;
let bristol;
let paris;
let calais;

function preload() {
  map = loadImage("src/map.png")

}

function setup() {

  createCanvas(windowWidth, windowWidth / 16 * 9);
  pix = width / 1600
  london = new Location("London", pix * 741, pix * 297, 23, "\nCurrently there are \n23 artworks in the \nLondon-area");
  bristol = new Location("Bristol", pix * 726, pix * 303, 5, "\nCurrently there are \n5 artworks in the \nBristol-area");
  paris = new Location("Paris", pix * 749, pix * 317, pix * 6, "\nCurrently there are \n6 artworks in the \nParis-area");
  calais = new Location("Calais", pix * 752, pix * 304, 2, "\nCurrently there are \n2 artworks in the \nCalais-area");
}

function draw() {
  background(255);
 image(map, 0, 0, width, height);
  london.show();
  london.popUp();
  bristol.show();
  bristol.popUp();
  paris.show();
  paris.popUp();
  calais.show();
  calais.popUp();
}

class Location {
  constructor(name, xPos, yPos, artworks, dialogue) {
    this.x = xPos;
    this.y = yPos;
    this.artworks = artworks;
    this.d = width / 1000 * this.artworks * pix + 3;
    this.dialogue = dialogue;
    this.name = name
  }
  show() {
    noStroke();
    fill(235, 81, 14, 200);
    ellipse(this.x, this.y, this.d);
    if (hover == true) {
      textSize(width / 50);
      text("\nhover over city to display information", width / 100, height - width / 20);

    }
  }
  popUp() {
    if (dist(this.x, this.y, mouseX, mouseY) <= this.d / 2) {
      fill(235, 81, 14);
      ellipse(this.x, this.y, this.d);
      textFont("Helvetica");
      textSize(width / 40);
      text(this.name, this.x + 5*pix, this.y);
      textSize(width / 50);
      text(this.dialogue, this.x + 5*pix, this.y);
      hover = false
    }
  }
}
