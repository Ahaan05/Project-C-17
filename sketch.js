
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  bananaGroup=new Group();
  obstaclesGroup=new Group();
 
 
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  console.log(ground.x);
  
}


function draw() {
background("white");
  
  ground.x=ground.width/2;
  
  if(keyDown("space")) {
        monkey.velocityY = -12;
  }
  
   monkey.collide(ground);
  
  bananas();
  obstacles();
  
drawSprites();
  
}
function bananas(){
  if(World.frameCount%80===0){
    var banana=createSprite(600,150,10,10);
    banana.velocityX=-4;
    banana.y=Math.round(random(100,120));
    banana.addImage("label",bananaImage);
    banana.lifetime=200;
    banana.scale=0.1;
    bananaGroup.add(banana);
  }
}
function obstacles(){
  if(World.frameCount%300===0){
    var obstacles=createSprite(400,330,20,20);
    obstacles.velocityX=-4;
    obstacles.addImage("label1",obstacleImage);
    obstacles.lifetime=135;
    obstacles.scale=0.1;
    obstaclesGroup.add(obstacles);
    
  }
  
}






