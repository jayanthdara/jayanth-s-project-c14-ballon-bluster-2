var red_balloon, red_img, pink_balloon, pink_img, green_balloon, green_img, bow, bow_img, blue_balloon, blue_img, arrow, arrow_img, backGround, ground_img, randomPosition

var score = 0;

var redGroup, blueGroup, greenGroup, pinkGroup;

var PLAY = 0;
var END = 1;

var gameState = PLAY;


function preload(){
  red_img = loadAnimation("red_balloon0.png");
  
  green_img = loadAnimation("green_balloon0.png");
  
  blue_img = loadAnimation("blue_balloon0.png");
  
  pink_img = loadAnimation("pink_balloon0.png");
  
  ground_img = loadAnimation("background0.png");
  
  bow_img = loadAnimation("bow0.png");
  
  arrow_img = loadAnimation("arrow0.png");
}

function setup() {
  createCanvas(590, 500);
  
  redGroup = createGroup();
  greenGroup = createGroup();
  blueGroup = createGroup();
  pinkGroup = createGroup();

  
  backGround = createSprite(200,200,500,500);
  backGround.scale=1.7;
  backGround.addAnimation("ground", ground_img);
  
  arrow = createSprite(490,200, 10, 10);
  arrow.scale = 0.5;
  arrow.addAnimation("arrow", arrow_img);
  
  bow = createSprite(490,200,10,10);
  bow.addAnimation("bow", bow_img);

}


function draw() {
  background("white");
  if (gameState === PLAY){
    bow.y=mouseY;
    arrow.y=mouseY;
    backGround.velocityX = -1.5;

    balloon();
  
  
    if(backGround.x<250){
      backGround.x = backGround.width/2;
    }
 
  
  
  if (keyDown("space")){
    arrow.velocityX = -5;  
  }
  
  
  if (arrow.x<0){
   arrow.y = 200;
   arrow.x = 460;
   arrow.velocityX = 0;
  }
  
  if (redGroup.isTouching(arrow)){
    redGroup.destroyEach();
    arrow.x = 490;
    arrow.velocityX = 0;
    score = score+1  
  }
  
  if (greenGroup.isTouching(arrow)){
    greenGroup.destroyEach();
    arrow.x = 490;
    arrow.velocityX = 0;
    score = score+2
  }
  
  if (blueGroup.isTouching(arrow)){
    blueGroup.destroyEach();
    arrow.x = 490;
    arrow.velocityX = 0;
    score = score+1  
  }
  
  if (pinkGroup.isTouching(arrow)){
    pinkGroup.destroyEach();
    arrow.x = 490;
    arrow.velocityX = 0;
    score = score+2;  
  }
    
  if (score === 10){
    gameState = END;
    
  }
  }

  drawSprites();
  
  if (gameState === END) {
    backGround.velocityX = 0;
    textSize(25);
    fill("black");
    text("Congratulations! You WON!!!", 150, 240);
    
  }
  
  
  
  textSize(20);
  fill("black");
  text("Score : "+score,260,40);

  
  randomPosition = Math.round(random(20,300));
  
  function red(){
    red_balloon = createSprite(-15,randomPosition,10, 10);
    red_balloon.scale =  0.1;
    red_balloon.addAnimation("red",red_img);
    red_balloon.velocityX =4;
    red_balloon.lifetime = 90;
    redGroup.add(red_balloon);
    
  }
  
  function blue(){
    blue_balloon = createSprite(-15,randomPosition,10, 10);
    blue_balloon.scale =  0.1;
    blue_balloon.addAnimation("blue", blue_img);    
    blue_balloon.velocityX =4;
    blue_balloon.lifetime = 90;
    blueGroup.add(blue_balloon);
    
  }
  
  function green(){
    green_balloon = createSprite(-15,randomPosition,10, 10);
    green_balloon.scale =  0.1;
    green_balloon.addAnimation("green",green_img);
    green_balloon.velocityX =4;
    green_balloon.lifetime = 90;
    greenGroup.add(green_balloon);
    
  }
  
 function pink(){
    pink_balloon = createSprite(-15,randomPosition,10, 10);
    pink_balloon.addAnimation("pink", pink_img);
    pink_balloon.velocityX =4;
    pink_balloon.lifetime = 90;
    pinkGroup.add(pink_balloon);
   
  }
  function balloon(){
  if (frameCount % 80 ===0){
    console.log(select_balloon);
    var select_balloon = Math.round(random(1,4));
    switch(select_balloon){
      case 1: red();
              break;
      case 2: blue()
              break;
      case 3: green();
              break;
      case 4: pink();
              break;
      default: break;
        
    }
              
  }
  }
  
}
