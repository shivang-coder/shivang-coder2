


function setup() {
  createCanvas(800,400);
}

function draw() {
  background(265,255);
  for (var i = 20; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  for (var i = 10; i < 200; i=i+40) {
    line(200,i,200,i+10);
  }
  for (var i = 25; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  for (var i = 40; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  drawSprites();
}