

function drawSquare(){
  var context = document.getElementById('canvas').getContext("2d");
  context.rect(20,20,150,150);
  context.stroke();
}

function empty(){
  var context = document.getElementById('canvas').getContext("2d");
  // empty the canvas
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
