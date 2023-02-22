const xPlayer = 80
let yPlayer = 200
let playerSpeed = 5
let isCollidingTop, isCollidingBottom = false

let playerPoints = 0

function showPlayer() {
  image(imagePlayer, xPlayer, yPlayer, 50, 50)
}

function movePlayer() {
  if (keyIsDown(UP_ARROW)) {
    yPlayer -= playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    yPlayer += playerSpeed
  }
}

function verifyCollision() {
  for (let i = 0; i < imageTopTubesList.length; i++) {
    
    isCollidingTop = collideRectCircle(xTubes[i], yTopTubes[i] - 10, widthTube, heightTube, xPlayer, yPlayer, 25)
    isCollidingBottom = collideRectCircle(xTubes[i], yTopTubes[i] + 450, widthTube, heightTube, xPlayer, yPlayer, 25)
    
    if (isCollidingTop || isCollidingBottom) {
      playerPoints = 0
      redraw()
    }
  }
}

function showPoints() {
  textSize(20)
  fill(255, 225, 0)
  text(playerPoints, width/3, 25)
}

function markPoints() {
  for (let i = 0; i < imageTopTubesList.length; i++) {
    
    if (xPlayer === xTubes[i] + widthTube - 30) {
      playerPoints += 1
      
      if (playerPoints === 10) {
        redraw()
      }
    }
    
  }
}


