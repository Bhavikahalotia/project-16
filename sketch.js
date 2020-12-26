var gameoverImage,sword,swordImage,fruitGroup,enemyGroup,fruit1,fruit2,fruit3,fruit4,monster,fruit;
var play=1;
var end=0;
var gamestate=1;
var score;
var knifesound,gameoversound;
function preload(){
 swordImage=loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  monster_moving=loadAnimation("alien1.png","alien2.png")
  gameoverImage=loadImage("gameover.png")
  knifesound=loadSound("knifeSwooshSound.mp3")
  gameoversound=loadSound("gameover.mp3")
                }
function setup(){ 
  createCanvas(600,400);
   sword=createSprite(200,200,30,30);
  sword.addImage("swordImage",swordImage);
  sword.scale=0.7;
    fruitGroup = createGroup();
  enemyGroup = createGroup();
  score=0
gameover=createSprite(300,200,50,50);
  gameover.addImage("gameoverImage",gameoverImage);
}
function draw(){
 background("white");
    text("Score: "+ score, 500,50);
if(gamestate===play){
  sword.y=World.mouseY
  sword.x=World.mouseX
   if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
     knifesound.play();
     score=score+2;
   }
  fruits();
Enemy();
  gameover.visible=false
}
  
if(enemyGroup.isTouching(sword)){
  enemyGroup.setVelocityXEach(0);
fruitGroup.setVelocityXEach(0);
fruitGroup.destroyEach();
enemyGroup.destroyEach();
gamestate="end";
gameover.visible=true
sword.visible=false
  gameoversound.play();
                                }
  

drawSprites();
                 }
  
  
function fruits(){
 if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
       position=Math.round(random(1,2));
   if(position==1){
     fruit.x=400
      fruit.velocityX=-(7+score/4);
   }
   else
     {
       if(position==2){
         fruit.x=0
          fruit.velocityX=(7+score/4);
       }
     }
    r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1)
            }    
     else if(r==2){
      fruit.addImage(fruit2)
                  } 
   else if(r==3){
      fruit.addImage(fruit3)
                }
  else if(r==4){
      fruit.addImage(fruit4)
               }
    fruit.y=Math.round(random(50,340))
        // fruit.velocityX=-(7+score/4);
    fruit.setLifetime=100;
    fruitGroup.add (fruit);  
                           }
}
function Enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20)
    monster.addAnimation("moving", monster_moving);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-(8+score/10);
    monster.setLifetime=50;
    enemyGroup.add(monster);
                             }
              }