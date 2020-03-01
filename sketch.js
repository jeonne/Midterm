

let Bathtub;
let scuba = [];
let health;
let fail;
let win;

var bubble;
var sound_fail;
var sound_win;

function preload() {
  Bathtub = loadImage('Bath tub1.png');

  scuba[0] = loadImage('scuba0.png');
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
  
  health = loadImage('Health.png');
  
  fail = loadImage('Fail.png');
  win  = loadImage('Win.png');
  
  soundFormats("wav");
  bubble = loadSound("Bubble sound.wav");
  sound_fail = loadSound("Sound_fail.wav");
  sound_win = loadSound("Sound_win.wav");
}
  
  

let y     = 0;
let mouse = 0;
let px0   = 170;
let py0   = 80;
let py    = 0;
let timer = 0;
let timer_max = 20;
let timer_win = 19;
let timer_pre = 0; 


function setup() {
  createCanvas(600, 540);
  frameRate(7);
  
}

function draw() { 
  if ( y > 9 ) {  // no change when y==10
    y = y;
    if (timer < timer_max) {
      timer = timer + 1;
    
    }
  }

  else if (mouse == 1) { // change y only when mouse clicked
    y = y + 1; 
    timer = 0;
  }
  
  if(mouse == 0)
    y = 0;
  
  py = py0 + y*8;
  
  
  if(timer / 5 < 1) {
    background(203, 220, 129);// level 1
  }
  else if(timer / 5 < 2) {
    background(236, 230, 131); // level 2
  }
  else if(timer / 5 < 3) {
    background(255, 221, 130) // level 3
  }
  else if(timer / 5 < 4) {
    background(253, 192, 124); // level 4
  }
  else {
    background(252, 163, 119); // level 5
  }
  
  image(Bathtub, -100, 20);
  image(scuba[y], px0, py);
  
//debug 
//strokeWeight(1);
//textSize(12); 
//fill(0); 
//text('Timer = ', 20, 60);
//text(nfc(timer,0), 70, 60);
  
  //health bar
  image(health, 50, 50, 170, 100); 
  fill(255, 255, 255);
  
  noStroke();
  rect(93, 99, 112, 10);
  fill(255, 0, 0);
  
  noStroke();
  rect(93, 99, timer * (112 / timer_max), 10);
  
  
  stroke(0);
  strokeWeight(3);
  line((93 + (timer_win / timer_max) * 112), (99-1) ,(93 +(timer_win / timer_max) * 112) , (99 + 10 + 1));

  if (timer_pre == timer) {
     
      //Fail
    if (timer == timer_max) {
      noStroke();
      fill(252, 163, 119);
      rect(0, 0, 600, 540);
      image(fail, 115, 100, 600 - 200, 540-200 );   
      sound_fail.play();
      sound_fail.noloop();
    }
    
    
      //win
   else if (timer == timer_win) {
      noStroke();
      fill(203, 220, 129);
      rect(0, 0, 600, 540);
      image(win, 150, 150, 600-150*2, 540-150*2 ); 
      sound_win.play();
      sound_win.noloop();
    
    } 
    
  }
  
  timer_pre = timer;
  
  if (mouseIsPressed) {
    bubble.play();
    bubble.setVolume(15);
  }
  
}

function mouseClicked() {
   mouse = 1 - mouse;
}
