
var xOffset;
var yOffset;
var playfield;
var context;
var stepSize = 10;
var boxSize = 20;
var boxColor = "black";

function init(){
  playfield = document.getElementById('theCanvas');
  context = playfield.getContext("2d");
  initListeners();
  reset();
}

function initListeners(){
  document.onkeydown = keyEventHandler;
  //window.addEventListener('onkeydown', keyEventHandler, false);
}
function keyEventHandler(event){
  switch(event.keyCode){
    case 38: move('up');
      break;
    case 39: move('right');
      break;
    case 40: move('down');
      break;
    case 37: move('left');
      break;
  }
}


// Week 4 - Refactoring
// If (else) statements
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

// Week 3 - Interactive customization

function setStepSize(value){
  stepSize = parseInt(value);
  }
function setColor(){
  var colorOption = document.getElementById('boxColor')
  boxColor = colorOption.options[colorOption.selectedIndex].value;
  draw();
}

// Week 2 - Drawing and Redrawing
function draw(){
  empty();
  context.fillStyle = boxColor;
  context.fillRect(xOffset,yOffset,boxSize,boxSize);
}
function empty(){
  context.clearRect(0, 0, playfield.width, playfield.height);
}
function reset(){
  xOffset = playfield.width / 2;
  yOffset = playfield.height / 2;
  draw();
}
