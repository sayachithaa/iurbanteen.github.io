
var context = document.getElementById('canvas').getContext("2d");

var squareWidth = 50;
var squareHeight = 50;
var xOffset = 40;
var yOffset = 40;
drawSquare();

function drawSquare(){
  context.fillStyle = '#333';
  context.fillRect(xOffset, yOffset, squareHeight,squareWidth);
}
 function goRight(){
   xOffset = xOffset + 5;
   context.clearRect(0, 0, context.canvas.width, context.canvas.height);
   drawSquare();
 }

function empty(){
  // empty the canvas
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
