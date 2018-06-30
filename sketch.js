let map;
let hover = true;
let popped;
let pix;

function preload() {
  map = loadImage("src/map.png")

}

function setup() {

  createCanvas(windowWidth, windowWidth / 16 * 9);
  pix = width / 1600
  london = new Location("London", pix * 741, pix * 297, 23, "\nCurrently there are \n23 artworks in the \nLondon area");
  bristol = new Location("Bristol", pix * 726, pix * 303, 6, "\nCurrently there are \n6 artworks in the \nBristol area");
  southHampton = new Location("South Hampton", pix * 732, pix * 304, 1, "\nCurrently there is \n1 artwork in the \nSouth Hampton area");
  torquay = new Location("Torquay", pix * 722, pix * 307, 1, "\nCurrently there is \n1 artwork in the \nTorquay area");
  paris = new Location("Paris", pix * 749, pix * 317, pix * 6, "\nCurrently there are \n6 artworks in the \nParis area");
  calais = new Location("Calais", pix * 752, pix * 304, 2, "\nCurrently there are \n2 artworks in the \nCalais area");
  newYork = new Location("New York", pix * 448, pix * 358, 19, "\nCurrently there are \n19 artworks in the \nNew York area");
  sanFrancisco = new Location("San Francisco", pix * 248, pix * 381, 3, "\nCurrently there are \n3 artworks in the \nSan Francisco area");
  losAngeles = new Location("Los Angeles", pix * 263, pix * 401, 2, "\nCurrently there are \n2 artworks in the \nLos Angeles area");
  newOrleans = new Location("New Orleans", pix * 376, pix * 416, 4, "\nCurrently there are \n4 artworks in the \nNew Orleans area");
  jerusalem = new Location("Jerusalem", pix * 884, pix * 399, 5, "\nCurrently there are \n5 artworks in the \nJerusalem area");
  tallin = new Location("Tallin", pix * 836, pix * 255, 1, "\nCurrently there is \n1 artwork in the \nTallin area");
}

function draw() {
  popped = true;
  background(255);
  image(map, 0, 0, width, height);
  calais.show();
  calais.popUp();
  bristol.show();
  bristol.popUp();
  southHampton.show();
  southHampton.popUp();
  torquay.show();
  torquay.popUp();
  paris.show();
  paris.popUp();
  london.show();
  london.popUp();
  newYork.show();
  newYork.popUp();
  sanFrancisco.show();
  sanFrancisco.popUp();
  losAngeles.show();
  losAngeles.popUp();
  newOrleans.show();
  newOrleans.popUp();
  jerusalem.show();
  jerusalem.popUp();
  tallin.show();
  tallin.popUp();
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
    fill(251, 215, 0, 175);
    ellipse(this.x, this.y, this.d);
    if (hover) {
      textSize(width / 50);
      text("\nhover over city to display information", width / 50, height - width / 20);

    }
  }
  popUp() {
    if (popped) {
      if (dist(this.x, this.y, mouseX, mouseY) <= this.d / 2) {
        fill(251, 215, 0);
        ellipse(this.x, this.y, this.d);
        textAlign(TOP)
        textFont("Helvetica");
        textSize(width / 60);
        text(this.name, this.x + this.d / 2 + 5 * pix, this.y + this.d / 2);
        textSize(width / 80);
        text(this.dialogue, this.x + this.d / 2 + 5 * pix, this.y + this.d / 2);
        hover = false;
        popped = false;
      }
    }
  }
}
