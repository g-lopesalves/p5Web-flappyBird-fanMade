function setup() {
  createCanvas(500, 400);
}

function draw() {
  if (playerPoints === 10) {
    
    showFinishScreen();
    
  } else {
    
  markPoints()
  background(imageBackground);
  
  showPlayer()
  movePlayer()
  verifyCollision()
  
  showTube()
  moveTubes()
  
  showPoints()
  }
}

function showFinishScreen() {
  background(0)
  textSize(40)
  textAlign(CENTER)
  fill('white')
  text("Congratulations, you won!", width/2, height/2)
}
