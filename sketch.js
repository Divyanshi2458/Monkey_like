
var monkey , monkeyrun;
var banana ,bananaImg, obstacle, obstacleImg,ground;
var Fruit, obstacles
var score
var bananaGroup,ObstacleGroup;
var survivalTime=0;

function preload(){
  bananaImg=loadImage("banana.png")
monkeyrun=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  obstacleImg=loadImage("obstacle.png")
    
}
function setup() {
  createCanvas(600,600)
ground=createSprite(300,530,600,5)
  ground.velocityX=-4
  monkey=createSprite(100,470,20,20)
  monkey.addAnimation("monkey",monkeyrun)
  monkey.scale=0.2

bananaGroup=createGroup()
  ObstacleGroup=createGroup()
}


function draw() {
  background(220)
  monkey.collide(ground)
     
   if(ObstacleGroup.isTouching(monkey)){
     ground.velocityX=0;
     ground.velocityY=0;
     ObstacleGroup.setVelocityXEach(0)
     bananaGroup.setVelocityXEach(0)
     ObstacleGroup.setLifetimeEach(0);
       bananaGroup.setLifetimeEach(-1)
      ObstacleGroup.setLifetimeEach(-1)
     monkey.changeAnimation()
   }
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
  if (ground.x <0){
     ground.x=300

    }
    if(keyDown("space") ){
  monkey.velocityY=-12
  }
  
  
    monkey.velocityY = monkey.velocityY + 0.8
    fruit()
  obstacles()
drawSprites()
  
}


function fruit()
{
    if (frameCount % 80 === 0){
  banana=createSprite(300,270,20,20)
  banana.addImage(bananaImg)
  banana.scale=0.2
  banana.velocityX=-3
      banana.y=Math.round(random(120,200))
      banana.lifetime=80
      bananaGroup.add(banana)
    }
}


function  obstacles(){
   if (frameCount % 300 === 0){
     obstacle=createSprite(300,490,20,20)
  obstacle.scale=0.2
  obstacle.addImage(obstacleImg)
     obstacle.velocityX=-3
       obstacle.lifetime = 90;
     ObstacleGroup.add(obstacle)
   }
   

}