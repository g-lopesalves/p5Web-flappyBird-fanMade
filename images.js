let imageBackground;
let imagePlayer;

let imageTopTube;
let imageBottomTube;

function preload() {
  imageBackground = loadImage("images/background.png")
  imagePlayer = loadImage("images/bird.png")
  imageTopTube = loadImage("images/topTube.png")
  imageBottomTube = loadImage("images/bottomTube.png")
  
  imageTopTubesList = [imageTopTube, imageTopTube, imageTopTube, imageTopTube]
  imageBottomTubesList = [imageBottomTube, imageBottomTube, imageBottomTube, imageBottomTube]
}