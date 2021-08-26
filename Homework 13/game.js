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

var obstX = [100, 700, 400, 400, 300];     // Length of this array denotes number of obstacles
var obstY = [100, 500, 300, 100, 500];
var obstWidth = [];
var obstLength = [];

// Add random numbers to length and width to make different rectangles.
for (var i = 0; i < obstX.length; i++)
{
    obstWidth[i] = 50 + getRandomNumber(10, 20) * 10;
    obstLength[i] = 50 + getRandomNumber(10, 20) * 10;
    console.log(i , obstWidth[i], obstLength[i]);
}

// Obstacle placed by player with mouse.
var clickObstX = -100;
var clickObstY = -100;

// Assign variables for speed, color, etc.
var playerSpeed = 3;
var obstSpeedX = [];
var obstSpeedY = [];
for(var i = 0; i < obstX.length; i++)
{
    obstSpeedX[i] = getRandomNumber(10, 21) + 1;
    obstSpeedY[i] = getRandomNumber(10, 21) + 1;

    // Make every other obstacle move the opposite direction.
    if(i % 2 == 1)
    {
        obstSpeedX[i] *= -1;
        obstSpeedY[i] *= -1;
    }
}

var randRGB = [0, 0, 0];
for(var i = 0; i < randRGB.length; i++)
{
    randRGB[i] = 20 + getRandomNumber(1000, 256);
}

// Additional variable to help make each obstacle a different color.
var extraColor = [];
for(var i = 0; i < obstX.length; i++)
{
    extraColor[i] = getRandomNumber(1000, 256);
}

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

        for(var i = 0; i < obstX.length; i++)
        {
            obstX[i] = screenLoopX(obstX[i]);
            obstY[i] = screenLoopY(obstY[i]);
        }

        // Obstacle movement.
        for(var i = 0; i < obstX.length; i++)
        {
            obstX[i] = obsMove(obstX[i], obstSpeedX[i]);
            obstY[i] = obsMove(obstY[i], obstSpeedY[i]);
        }

        //Player movement.
        playerMove();
    }

    // Draw objects to screen.
    drawExit();
    drawPlayer();
    drawObst();
}

// Returns a random number.
// For predictable results, multiplier should be 10, 100, 1000, etc.
// Function will return a MAXIMUM of (limit - 1).
function getRandomNumber(multiplier, limit)
{
    return Math.floor(Math.random() * multiplier) % limit;
}

// Place stationary obstacle on screen at mouse click.
function mouseClicked()
{
    clickObstX = mouseX;
    clickObstY = mouseY;
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
    fill(80, 40, 130);
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
    for(var i = 0; i < obstX.length; i++)
    {
        fill(randRGB[0], randRGB[1], extraColor[i]);
        rect(obstX[i], obstY[i], obstWidth[i], obstLength[i]);
    }

    fill(20, 200, randRGB[2]);
    triangle(clickObstX, clickObstY, clickObstX-50, clickObstY+65, clickObstX+50, clickObstY+65);
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