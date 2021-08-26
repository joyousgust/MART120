// Reference points for object locations.
var screenLeft = 0;
var screenRight = 800;
var screenTop = 0;
var screenBottom = 600;

var playerX = 25;
var playerY = 575;

var exitLeft = screenRight - 150;
var exitRight = screenRight;
var exitTop = screenTop - 50;
var exitBottom = screenTop;

var exitSignX = exitLeft;
var exitSignY = exitBottom;

var obst1X = 100;
var obst1Y = 100;
var obst2X = 700;
var obst2Y = 500;

var obst3X = -100;
var obst3Y = -100;

// Variables for speed, color, etc.
var playerSpeed = 3;
var obst1SpeedX = Math.floor(Math.random() * 10) + 1;  // Always moves at least a bit along the x-axis.
var obst1SpeedY = Math.floor(Math.random() * 10);
var obst2SpeedX = Math.floor(Math.random() * 10);
var obst2SpeedY = Math.floor(Math.random() * 10) + 1; // Always moves a bit along the y-axis.

var randRed = Math.floor(Math.random() * 1000) % 255;
var randBlue = Math.floor(Math.random() * 1000) % 255;
var randGreen = Math.floor(Math.random() * 1000) % 255;

var gameEnd = false;

function setup()
{
    createCanvas(screenRight,screenBottom);
}

function draw()
{
    background(200, 220, 255);

    // Check to see if game should end.
    gameEndCheck();

    if(gameEnd == false)
    {
        // Call screenLoop functions for player and obstacle positions.
        playerX = screenLoopX(playerX);
        playerY = screenLoopY(playerY);
        obst1X = screenLoopX(obst1X);
        obst1Y = screenLoopY(obst1Y);
        obst2X = screenLoopX(obst2X);
        obst2Y = screenLoopY(obst2Y);

        // Obstacle movement.
        obst1X = obsMove(obst1X, obst1SpeedX);
        obst1Y = obsMove(obst1Y, obst1SpeedY);
        obst2X = obsMove(obst2X, obst2SpeedX);
        obst2Y = obsMove(obst2Y, obst2SpeedY);

        //Player movement.
        playerMove();
    }

    // Draw objects to screen.
    drawExit();
    drawPlayer();
    drawObst();
}

// Place stationary obstacle on screen at mouse click.
function mouseClicked()
{
    obst3X = mouseX;
    obst3Y = mouseY;
    return false;
}

function gameEndCheck()
{
    // Check player's position.  If they are within the "exit box," end the game and display a winning message.
    if(playerX <= exitRight && playerX >= exitLeft && playerY <= exitBottom && playerY >= exitTop)
    {
        gameEnd = true;
        textSize(40);
        textStyle(BOLD);
        stroke(0);
        fill(255);
        text('You Win!', screenRight/2 - 100, screenBottom/2)
    }
    return false;
}

function obsMove(coord, speed)
{
    return coord += speed;
}

function playerMove()
{
    // Player movement with WASD and arrow keys.
    if(keyIsDown(87) || keyIsDown(38)) // Up
    {
        playerY -= playerSpeed;
    }
    if(keyIsDown(83) || keyIsDown(40)) // Down
    {
        playerY += playerSpeed;
    }
    if(keyIsDown(65) || keyIsDown(37)) // Left
    {
        playerX -= playerSpeed;
    }
    if(keyIsDown(68) || keyIsDown(39)) // Right
    {
        playerX += playerSpeed;
    }

    return false;
}

function drawExit()
{
    fill(130, 40, 80);
    rect(exitSignX, exitSignY, 150, 50);
    textSize(24);
    fill(255);
    textStyle(BOLD);
    text('↑EXIT↑', exitSignX + 35, exitSignY + 30);
    return false;
}

function drawPlayer()
{
    fill(90, 180, 255);
    circle(playerX, playerY, 30);
    return false;
}

function drawObst()
{
    fill(randRed + 50, randGreen % 175, 0);
    square(obst1X, obst1Y, 100);
    fill(randRed, randGreen, randBlue - 50);
    rect(obst2X, obst2Y, 75, 200);
    fill(50, randGreen, 50);
    triangle(obst3X, obst3Y-45, obst3X-60, obst3Y + 45, obst3X+60, obst3Y + 45);
    return false;
}

function screenLoopX(xCoord)
{
    if(xCoord > screenRight)
    {
        xCoord = screenLeft;
    }
    else if(xCoord < screenLeft)
    {
        xCoord = screenRight;
    }
    return xCoord;
}

function screenLoopY(yCoord)
{
    if(yCoord > screenBottom)
    {
        yCoord = screenTop;
    }
    else if(yCoord < screenTop)
    {
        yCoord = screenBottom;
    }
    return yCoord;
}