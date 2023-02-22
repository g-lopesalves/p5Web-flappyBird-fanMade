let xTubes = [200, 500, 800, 1100]
let yTopTubes = [-200, -300, -158, -220]
let widthTube = 170
let heightTube = 340

var tubeSpeed = 3

function showTube() {
  for (let i = 0; i < imageTopTubesList.length; i++) {
    image(imageTopTubesList[i], xTubes[i], yTopTubes[i], widthTube, heightTube)
    image(imageBottomTubesList[i], xTubes[i], yTopTubes[i] + 450, widthTube, heightTube)
  }
}

function moveTubes() {
  for (let i = 0; i < xTubes.length; i++) {
    
    xTubes[i] -= tubeSpeed
    
    if (isOutOfBounds(xTubes[i])) {
      
      xTubes[i] = 600
      yTopTubes[i] = randomizeTubeHeight(yTopTubes[i])
    }
  }
}

function isOutOfBounds(xTubePosition) {
  return xTubePosition < -600
}

function randomizeTubeHeight(tubeHeight) {
  return random(-400, -100)
}