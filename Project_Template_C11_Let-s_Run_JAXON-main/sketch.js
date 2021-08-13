var jaxon,jaxon_walking,invisibleGround,invisibleGround2

var ground,background1

  function preload(){
      //pre-load images
    jaxon_walking=loadAnimation("Runner-1.png","Runner-2.png")
    ground=loadImage("path.png")
    }

function setup()
{
    createCanvas(400,400);
    //create sprites
    background1=createSprite(200,200)
    background1.addImage("road",ground)
    background1.scale=1.2
    background1.velocityY=4

    jaxon=createSprite(180,340,30,30)
    jaxon.addAnimation("running",jaxon_walking)
    jaxon.scale=0.08

    invisibleGround=createSprite(50,200,80,400)
    invisibleGround.visible=false

    invisibleGround2=createSprite(350,200,80,400)
    invisibleGround2.visible=false
  }

function draw() 
{
    background[30];
    
    jaxon.x=World.mouseX

    if(background1.y>400){
      background1.y=height/2
    }
    jaxon.collide(invisibleGround)
    jaxon.collide(invisibleGround2)

  drawSprites();
  }
