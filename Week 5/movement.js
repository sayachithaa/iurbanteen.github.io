
var xOffset;
var yOffset;
var playfield;
var context;
var stepSize = 10;
var boxSize = 50;
var gameLength = 30; // seconds
var counter;
var currentScore;
var dots = [],
    dotCount = 20,
    dotSize = 30;
var started = false;
var gameEndSound;

var food;
var character;
var background;
var title;

function init(){
  playfield = document.getElementById('theCanvas');
  context = playfield.getContext("2d");

  initListeners();
  initValues();
  gameEndSound = new Audio("bubbles.wav");
  // makeDots();
  // reset();
  food = new Image();
  food.src = 'food008.gif';
  title = new Image();
  title.src = 'shipwreck.jpg';
  background = new Image();
  background.src = 'underwater.jpeg';
  character = new Image();
  character.src = 'ufo-2.gif';
  context.drawImage(title, 0, 0, playfield.width, playfield.height);

}


function makeDots(){
  for(var i=0; i < dotCount; i++){
    var randomX = Math.floor(Math.random()*playfield.width);
    var randomY = Math.floor(Math.random()*playfield.height);
    dots.push({
        x: randomX,
        y: randomY
      });
    //console.log(`Dot at (${x}, ${y})`);
  }
}

function drawDots(){
  context.fillStyle = "#FF0000";
  for(var count=0; count < dots.length; count++){
    var currentDot = dots[count];
    //console.log(`Draw at (${currentDot.x}, ${currentDot.y})`);
    //context.fillRect(currentDot.x,currentDot.y,dotSize,dotSize);
    context.drawImage(food, currentDot.x,currentDot.y, dotSize, dotSize)
  }
}

function initValues(){
  counter = gameLength;
  currentScore = 0;
  $('#timer').text(counter);
  $('#score').text(currentScore);

}

function initListeners(){
  document.onkeydown = keyEventHandler;
  //window.addEventListener('onkeydown', keyEventHandler, false);
}
function keyEventHandler(event){
  if ((event.keyCode == 32) && (! started)){startGame();} // spacebar)
  if (! started) return;
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
function startGame(){
  currentScore = 0;
  $('#score').text(currentScore);
  dots = [];
  makeDots();
  reset();

  if (!started){
    started = true;
    counter = gameLength;
    $("#timer").text(counter);
    runTimer();
  }
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

function clickMove(button){
  // Hour 1
  moveIf(button.id);

  // Hour 3
  //move(button.id);
}

function setBoxSize(value){
  boxSize = parseInt(value);
  draw();
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
  checkForDot();
  draw();
}

function checkForDot(){
  for (var i = 0; i < dots.length; i++) {
    var dotX = dots[i].x,
      dotY = dots[i].y;
    //console.log(`Check for dot at: (${dotX},${dotY})`);
    if ( (dotX >= xOffset) && (dotX <= (xOffset + boxSize))
      && (dotY >= yOffset) && (dotY <= (yOffset + boxSize))){
        //console.log(`Found one!`);
        dots.splice(i, 1);
        addPoint();
      }
  }
}

function addPoint(){
  currentScore += 1;
  $('#score').text(currentScore);
}

function draw(){
  clear();
  drawDots();
  context.fillStyle = "#000000";
  // context.fillRect(xOffset,yOffset,boxSize,boxSize);
  context.drawImage(character, xOffset, yOffset, boxSize, boxSize);

}
function clear(){
  context.clearRect(0, 0, playfield.width, playfield.height);
  context.drawImage(background, 0, 0, playfield.width, playfield.height);
}
function reset(){
  xOffset = playfield.width / 2;
  yOffset = playfield.height / 2;
  draw();
}


