const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ss, ssImg
var bg,bgimg
var snow1,snowG,snowimg
var ground
var man,manimg,manimg2
var bo,slingshot1
var score = 0
var  snows = []
function preload(){
  
  bgimg = loadImage("snow2.jpg")
 snowimg = loadImage("snow.png");
  manimg = loadImage("lb.png.png")
  manimg2 = loadImage("rb.png.png")
}
function setup() {
  createCanvas(1400,700); 
 engine = Engine.create();
   world = engine.world;

 man  = createSprite(350,490,10,10)
 man.addImage(manimg)
 man.scale = 0.09
 bo = new Ball(450,490);
 
 slingShot = new Slingshot(bo.body,{x:450 , y:490})

ground = new Ground(360,690,800,10)
ground2 = new Ground(1290,630,800,10)
ground4 = new Ground(1330,230,20,800)
ground5 = new Ground(1200,40,600,20)
ground6 = new Ground(1200,530,600,20)
ground7 = new Ground(910,420,20,200)

snow1 = new Snow(10000,25);
 
for (var l = 20; l <=width-10; l=l+50) 
{
  snows.push(new Snow(360));
}
score =0;
}


function draw() {
  background(bgimg);  
snow1.display();
fill("Blue")
ground2.display();
  fill("red")
ground.display();
textSize(25)
fill("green")
  text("*NOTE FILL THE BOX FULLY BY DRAGING THE BALL AND HIT THE GIANT SNOW BALL ", 48,100);
  fill("orange")
  text("*NOTE FILL THE BOX FULLY BY DRAGING THE BALL AND HIT THE GIANT SNOW BALL ", 50,100);
  fill("")
  text("USE THE SPACE KEY FOR REST THE BALL ", 50,150);
  fill("red")
//bo.display();
Engine.update(engine);
rand = Math.round(random(1,1));
if(frameCount%5===0){
    snow=frameCount;
    snow = createSprite(random(10,1270), random(10,30), 10, 10);
    switch(rand){
        case 1: snow.addImage(snowimg);
        break;
       
        default: break;
    }
    snow.velocity.y = random(10,15,20,6,8)
    snow.scale = random(0.05,0.02,0.03,0.04)
    snow.lifetime = 400
}
 

  
    if (frameCount% 40 == 0){
      snows.push(new Snow(random(780,830), random(1,1), 90, 90))
      snows.velocityY = 10
  }
    man.display();
    slingShot.display();
    bo.display();
    ground4.display();
    ground5.display();
    ground6.display();
    ground7.display();


  drawSprites();
  createSnow();
  
  for (var l = 0; l < snows.length; l++) {
    snows[l].display();
  }
}
function createSnow() {
  if (World.frameCount % 5 == 0) {  
 var snow = createSprite(Math.round(random(70,1000),80, 50, 5));
  snow.addImage(snowimg);
  snow.scale=0.04;
  snow.velocityY = 20;
  snow.lifetime = 33;
  snowG.add(snow1);
  }

  }
   
  function mouseDragged(){
    Matter.Body.setPosition(bo.body,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
     slingShot.fly();
 }
 function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(bo.body);
     Matter.Body.setPosition(bo.body,{x:190,y:490})
     
   }
}
