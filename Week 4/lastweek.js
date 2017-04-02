
var context = document.getElementById('canvas').getContext("2d");

var squareWidth = 50;
var squareHeight = 50;
var xOffset = 275; // (context.canvas.width / 2) - (squareWidth / 2)
var yOffset = 175; // (context.canvas.height / 2) - (squareHeight / 2)
var stepSize = 5;
var stepCount = 1;
var boxColor = "black";

drawSquare();
document.onkeydown = keyEventHandler;

function init(){

}

function keyEventHandler(event){
  console.log(`Key Code ${event.keyCode}`);
  if(event.keyCode == 38){ // "Up" key
    move("up");
  } else if(event.keyCode == 40){ // "Down" key
    move("down");
  } else if(event.keyCode == 37){ // "Left" key
    move("left");
  } else if(event.keyCode == 39){ // "Right" key
    move ("right");
  }
}
// This code was written
/*
This function gets by button and moved
*/
function move(direction){

   if((yOffset > stepSize) && (direction == "up")){
      yOffset = yOffset - stepSize;
   }

   else if (((yOffset + squareHeight + stepSize) < context.canvas.height) &&
   (direction == "down")){
     yOffset = yOffset + stepSize;
   }
   else if (direction == "left"){
     xOffset = xOffset - stepSize;
   }
   else if (direction == "right"){
     xOffset = xOffset + stepSize;
   }
   empty();
   drawSquare();
}


function reset(){
  xOffset = 275;
  yOffset = 175;
  empty();
  drawSquare();
}
function setStepSize(value){
  stepSize = parseInt(value); // explain integer
}
function setStepCount(value){
  stepCount = parseInt(value); // explain integer
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



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function empty(){
  // empty the canvas
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
