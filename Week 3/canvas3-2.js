
var context = document.getElementById('canvas').getContext("2d");

var squareWidth = 50;
var squareHeight = 50;
var xOffset = 275; // (context.canvas.width / 2) - (squareWidth / 2)
var yOffset = 175; // (context.canvas.height / 2) - (squareHeight / 2)
var stepSize = 5;
var boxColor = "black";

drawSquare();

function reset(){
  xOffset = 275;
  yOffset = 175;
  empty();
  drawSquare();
}
function setStepSize(value){
  stepSize = parseInt(value); // explain integer
}
function setColor(){
  var colorOption = document.getElementById('boxColor');
  boxColor = colorOption.options[colorOption.selectedIndex].value;
  drawSquare();
}

function drawSquare(){
  context.fillStyle = boxColor;
  context.fillRect(xOffset, yOffset, squareHeight,squareWidth);
}
 function goRight(){
   xOffset = xOffset + stepSize;
   empty();
   drawSquare();
 }
 function goLeft(){
   xOffset = xOffset - stepSize;
   empty();
   drawSquare();
 }
 function goUp(){
   yOffset = yOffset - stepSize;
   empty();
   drawSquare();
 }
 function goDown(){
   yOffset = yOffset + stepSize;
   empty();
   drawSquare();
 }


function empty(){
  // empty the canvas
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
