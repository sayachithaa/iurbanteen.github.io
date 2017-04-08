// Initialize Global variables.
var xOffset;
var yOffset;
var playfield;
var context;
var stepSize = 10;
var boxSize = 20;
var boxColor = "black";

var food;
var foodSize = 30;
var foodImage;


// Initialize --- when is this function called?
function init(){
  // Assign values to global convenience variables
  playfield = document.getElementById('theCanvas');
  context = playfield.getContext("2d");

  // Call functions
  initListeners();
  initValues();
  resetBox();
  draw();
}

//////////////////////
// Week 5 - Arrays! //
//////////////////////


function makeFood(){
  
}

function drawFood(){

}

function initValues(){
}

function startGame(){
}


function runTimer(){
  var interval = setInterval(function() {
    if (counter >0){
      tickClock();
      if (counter == 1) gameEndSound.play(); // play sound with 1 sec. remaining
    } else {
      clearInterval(interval);
      started = false;
    }
  },1000);
}
function tickClock(){
  counter -= 1;
  $("#timer").text(counter);
}
//////////////////////////
// Week 4 - Refactoring //
// If (else) statements //
//////////////////////////

// Listen for key press events
function initListeners(){
  document.onkeydown = keyEventHandler;
  //window.addEventListener('onkeydown', keyEventHandler, false);
}


// Translate even code into movement direction and move
function keyEventHandler(event){
  if (event.keyCode == 38) {
    move('up');
  } else if (event.keyCode == 39) {
    move('right');
  } else if (event.keyCode == 40) {
    move('down');
  } else if (event.keyCode == 37) {
    move('left');
  }
}


function move(direction){
    if (direction == 'up' && yOffset > 0){
      yOffset -= stepSize;
    }
    else if (direction == 'down' && yOffset < (playfield.height - boxSize)){
      yOffset += stepSize;
    }
    else if (direction == 'right' && xOffset < (playfield.width - boxSize)){
      xOffset += stepSize;
    }
    else if (direction == 'left' && xOffset > 0){
      xOffset -= stepSize;
    }
  draw();
}

///////////////////////////////
//        Week 3             //
// Interactive customization //
///////////////////////////////

// Changes number of steps box takes with each 'move'
function setStepSize(value){
  stepSize = parseInt(value);
  }


// Sets box color to color selected in 'boxColor' dropdown HTML element
function setColor(){
  var colorOption = document.getElementById('boxColor')
  boxColor = colorOption.options[colorOption.selectedIndex].value;
  draw();
}

///////////////////////////////
// Week 2 - Drawing the Game //
///////////////////////////////

// Draw current state of game.
function draw(){
  empty(); // clear canvas
  context.fillStyle = boxColor; // change our paintbrush color
  context.fillRect(xOffset,yOffset,boxSize,boxSize); // draw box
}

// Clear canvas
function empty(){
  context.clearRect(0, 0, playfield.width, playfield.height);
}

// Move box to middle of canvas
function resetBox(){
  xOffset = playfield.width / 2;
  yOffset = playfield.height / 2;
}
