var bow, arrow, green_balloon, red_balloon ,pink_balloon ,blue_balloon, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);

  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
 
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1; 
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
    console.log(frameCount)
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  var selectballoon=Math.round(random(1,4));
  if(frameCount %80===0){
  if(selectballoon===1){
   redballoon();
  }
  else if (selectballoon===2){
   blueballoon()
  }
  else if(selectballoon===3){
   greenballoon();
  }
  else if(selectballoon===4){
  pinkballoon();
  }
    
  }
    
  drawSprites();
}

// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(360, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow;
}
function redballoon(){
   red_balloon = createSprite(0, 100, 1, 1);
   red_balloon.y=Math.round(random(0,370));
   red_balloon.addImage(red_balloonImage);
   red_balloon.scale = 0.1
   red_balloon.velocityX=3;
   red_balloon.lifetime=160;
}
function blueballoon(){
   blue_balloon = createSprite(0, 100, 1, 1);
   blue_balloon.y=Math.round(random(0,370));
   blue_balloon.addImage(blue_balloonImage);
   blue_balloon.scale = 0.1
   blue_balloon.velocityX=3;
   blue_balloon.lifetime=160;
}
function greenballoon(){
  green_balloon = createSprite(0, 100, 1, 1);
  green_balloon.y=Math.round(random(0,370));
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale = 0.1
  green_balloon.velocityX=3;
  green_balloon.lifetime=160;
}
function pinkballoon(){
  pink_balloon = createSprite(0, 100, 1, 1);
  pink_balloon.y=Math.round(random(0,370));
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.scale = 1
  pink_balloon.velocityX=3;
  pink_balloon.lifetime=160;
}









