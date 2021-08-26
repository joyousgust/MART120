var xFace = 200;
var yFace = 200;
var xGlasses = xFace - 50;
var yGlasses = yFace;
var xBody = xFace - 60;
var yBody = yFace + 75;
var xArm1 = xBody - 20;
var yArm1 = yBody;
var xArm2 = xBody + 120;
var yArm2 = yArm1;
var xText = 150;
var yText = 40;

var xTriCenter = 200;
var yTriCenter = 200;
var xTriTop1 = xTriCenter - 130;
var yTriTop1 = yTriCenter - 160;
var xTriTop2 = xTriCenter;
var yTriTop2 = yTriCenter - 20;
var xTriTop3 = xTriCenter + 135;
var yTriTop3 = yTriCenter + 100;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125, 0, 65);
  
  
  // Draw triangles and increment position.
  fill(190, 255, 190);
  triangle(xTriTop1, yTriTop1, xTriTop1 - 50, yTriTop1 + 80, xTriTop1 + 50, yTriTop1 + 80);
  triangle(xTriTop2, yTriTop2, xTriTop2 - 50, yTriTop2 + 80, xTriTop2 + 50, yTriTop2 + 80);
  triangle(xTriTop3, yTriTop3, xTriTop3 - 50, yTriTop3 + 80, xTriTop3 + 50, yTriTop3 + 80);
  
  // Face, glasses, & hair.
  fill(205, 175, 175); //Placeholder!
  arc (xFace - 75, yFace + 10, 20, 30, QUARTER_PI, 3*HALF_PI);
  arc (xFace + 75, yFace + 10, 20, 30, 3*HALF_PI, 3*QUARTER_PI);
  circle(xFace, yFace, 150);
  strokeWeight(15);
  stroke(0); //Placeholder!
  arc(xFace, yFace, 150, 150, PI, 0);
  strokeWeight(1);
  stroke(0);
  
  noFill();
  rect(xGlasses, yGlasses, 40, 20);
  line(xGlasses + 40, yGlasses + 10, xGlasses + 55, yGlasses + 10);
  rect(xGlasses + 55, yGlasses, 40, 20);
  
  // Eyes & mouth.
  fill(0);
  ellipse(xFace - 25, yFace, 7, 30);
  ellipse(xFace + 25, yFace, 7, 30);
  
  noFill();
  arc(xFace, yFace + 40, 50, 25, 0, PI);
  
  // Body & arms.
  fill(40, 40, 90); //Placeholder!
  rect(xBody, yBody, 120, 300);
  fill(205, 175, 175); 
  rect(xArm1, yArm1, 20, 300);
  rect(xArm2, yArm2, 20, 300);
  
  fill(205, 175, 175); 
  arc(xFace, yFace + 76, 75, 75, 0, PI);
  point(xFace - 15, yFace + 90);
  
  textSize(40);
  fill(255);
  text('Self Portrait', xText, yText);
  textSize(14);
  text('by Sunny', xText + 160, yText + 15);
}