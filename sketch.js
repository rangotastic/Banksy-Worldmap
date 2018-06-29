let map;
function preload(){
	map = loadImage("src/bene.png")
}
function setup() {

	createCanvas(windowWidth,windowWidth/16*9);
}

function draw() {
image(map,0,0,width,height);
}
