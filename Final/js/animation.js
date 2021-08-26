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

var xTriTop1 = 70;
var yTriTop1 = 40;
var xTriTop2 = 200;
var yTriTop2 = 180;
var xTriTop3 = 335;
var yTriTop3 = 300;

var xCircle = 40;
var yCircle = 460;

var totalStep = 0; // To use for animation to happen by frames instead of by position.
var textScale = 0;
var textStep = 5;

var circleStep = Math.floor(Math.random()*10) + 3;
var circleStart = yCircle;
var triBoundRight = xTriTop3 + 1;
var triBoundLeft = xTriTop1 - 1;
var triBoundTop = yTriTop1 - 1;
var triBoundBottom = yTriTop3 + 1;
var triStep1 = Math.floor(Math.random()*10) + 1;
var triStep2 = Math.floor(Math.random()*10) + 1;
var triStep3 = Math.floor(Math.random()*10) + 1;


function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(125, 0, 65);
  
  // Draw shapes.
  fill(90, 90, 200);
  circle(xCircle, yCircle, 50);
  circle(xCircle + 320, yCircle, 50);

  fill(190, 255, 190);
  triangle(xTriTop1, yTriTop1, xTriTop1 - 50, yTriTop1 + 80, xTriTop1 + 50, yTriTop1 + 80);
  triangle(xTriTop2, yTriTop2, xTriTop2 - 50, yTriTop2 + 80, xTriTop2 + 50, yTriTop2 + 80);
  triangle(xTriTop3, yTriTop3, xTriTop3 - 50, yTriTop3 + 80, xTriTop3 + 50, yTriTop3 + 80);
  
  // Face, glasses, & hair.
  fill(205, 175, 175); 
  arc (xFace - 75, yFace + 10, 20, 30, QUARTER_PI, 3*HALF_PI);
  arc (xFace + 75, yFace + 10, 20, 30, 3*HALF_PI, 3*QUARTER_PI);
  circle(xFace, yFace, 150);
  strokeWeight(15);
  stroke(0); 
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
  fill(40, 40, 90);
  rect(xBody, yBody, 120, 300);
  fill(205, 175, 175); 
  rect(xArm1, yArm1, 20, 300);
  rect(xArm2, yArm2, 20, 300);
  
  fill(205, 175, 175); 
  arc(xFace, yFace + 76, 75, 75, 0, PI);
  point(xFace - 15, yFace + 90);
  
  textSize(40 + textScale);
  fill(255);
  text('Self Portrait', xText, yText);
  textSize(14 + textScale);
  text('by Sunny', xText + 160, yText + 15);

  // Animation begins here.
  // Change text size every 10 frames so it doesn't jitter so much.
  if (totalStep % 10 == 0)
  {
      //Change sign on textStep when scale reaches bounds.
      if(textScale >= Math.abs(textStep*5) || textScale < 0)
      {
          textStep *= -1;
      }
      textScale += textStep;
  }

  // Make triangles move opposite each other.
  if(xTriTop1 >= triBoundRight || xTriTop1 <= triBoundLeft)
  {
      triStep1 *= -1;
  }
  xTriTop1 += triStep1;

  if(xTriTop3 >= triBoundRight || xTriTop3 <= triBoundLeft)
  {
      triStep3 *= -1;
  }
  xTriTop3 -= triStep3;

  // Make center triangle move diagonally.
  if (xTriTop2 >= triBoundRight || xTriTop2 <= triBoundLeft 
    || xTriTop2 >= triBoundBottom || xTriTop2 <= triBoundTop)
    {
        triStep2 *= -1;
    }
  xTriTop2 += triStep2;
  yTriTop2 += triStep2;

  // Make circles shoot off and then come back after a while.
  if (yCircle <= -600)
  {
      yCircle = circleStart;
  }
  yCircle -= circleStep;


  totalStep++;
}