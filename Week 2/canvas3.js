
var context = document.getElementById('canvas').getContext("2d");

var squareWidth = 50;
var squareHeight = 50;
var xOffset = 275; // (context.canvas.width / 2) - (squareWidth / 2)
var yOffset = 175; // (context.canvas.height / 2) - (squareHeight / 2)
drawSquare();

function reset(){
  xOffset = 275;
  yOffset = 175;
  empty();
  drawSquare();
}

function drawSquare(){
  context.fillStyle = '#333';
  context.fillRect(xOffset, yOffset, squareHeight,squareWidth);
}
 function goRight(){
   xOffset = xOffset + 5;
   empty();
   drawSquare();
 }
 function goLeft(){
   xOffset = xOffset - 5;
   empty();
   drawSquare();
 }
 function goUp(){
   yOffset = yOffset - 5;
   empty();
   drawSquare();
 }
 function goDown(){
   yOffset = yOffset + 5;
   empty();
   drawSquare();
 }


function empty(){
  // empty the canvas
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
