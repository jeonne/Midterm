
let Bathtub;
let scuba = [];

function preload() {
  Bathtub = loadImage('Bath tub.png');

  scuba[0] = loadImage('Scuba0.png');
  scuba[1] = loadImage('scuba1.png'); 
  scuba[2] = loadImage('scuba2.png');
  scuba[3] = loadImage('scuba3.png');
  scuba[4] = loadImage('scuba4.png');
  scuba[5] = loadImage('scuba5.png');
  scuba[6] = loadImage('scuba6.png');
  scuba[7] = loadImage('scuba7.png');
  scuba[8] = loadImage('scuba8.png');
  scuba[9] = loadImage('scuba9.png');
  scuba[10] = loadImage('scuba10.png');
}

let y     = -1;
let mouse = 0;
let px0   = 250;
let py0   = 200;
let py    = 0;
let timer = 0;

function setup() {
  createCanvas(800, 800);
  frameRate(7);
  
}

function draw() { 
  if ( y > 9 ) {  // no change when y==10
    y = y;
    timer = timer + 1;
  }
  else if (mouse == 1) { // change y only when mouse clicked
    y = y + 1; 
    timer = 0;
  }
  
  if(mouse == 0)
    y = 0;
  
  py = py0 + y*8;
  

  background(255, 200, 204);
  image(Bathtub, 0, 200);
  image(scuba[y], px0, py);
  
  textSize(12);
  text('Timer = ', 10, 60);
  fill(0);
  
  text(nfc(timer,0), 60, 60);
  
}

function mouseClicked() {
   mouse = 1 - mouse;
}
