
var xOffset;
var yOffset;
var playfield;
var context;
var stepSize = 10;
var boxSize = 20;

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


function clickMove(button){
  // Hour 1
  moveIf(button.id);

  // Hour 3
  //move(button.id);
}


// Hour 1 - Refactoring
function moveIf(direction){
  if(direction == "up"){
    yOffset = yOffset - stepSize;
  }
  if(direction == "down"){
    yOffset = yOffset + stepSize;
  }
  if(direction == "right"){
    xOffset = xOffset + stepSize;
  }
  if(direction == "left"){
    xOffset = xOffset - stepSize;
  }
  draw();
}
// Hour 2 - Refactoring
function moveIf(direction){
  if(direction == "up"){
    yOffset = yOffset - stepSize;
  } else if (direction == "down"){
    yOffset = yOffset + stepSize;
  } else if(direction == "right"){
    xOffset = xOffset + stepSize;
  } else if(direction == "left"){
    xOffset = xOffset - stepSize;
  }
  draw();
}


// Hour 3 - Refactoring
// Switch statements, short form mutators
function move(direction){
  switch(direction){
    case 'up':
      if (yOffset > 0){
        yOffset -= stepSize;
      }
      break;
    case 'down':
      if (yOffset < (playfield.height - boxSize)){
        yOffset += stepSize;
      }
      break;
    case 'right':
      if (xOffset < (playfield.width - boxSize)){
        xOffset += stepSize;
      }
      break;
    case 'left':
      if (xOffset > 0){
        xOffset -= stepSize;
      }
      break;
  }
  draw();
}

function draw(){
  clear();
  context.fillRect(xOffset,yOffset,boxSize,boxSize);
}
function clear(){
  context.clearRect(0, 0, playfield.width, playfield.height);
}
function reset(){
  xOffset = playfield.width / 2;
  yOffset = playfield.height / 2;
  draw();
}
