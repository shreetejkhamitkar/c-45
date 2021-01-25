const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var soldier1Img,soldier1;
var villager1,villager2,villager3,terrorist1;
var villager1Img,villager2Img,villager3Img,terrorist1Img;
var backgroundImg,background1;
var bullet,bulletImg;
var canvas;
var bulletGroup;
var villagerGroup;

function preload(){
villager1Img=loadImage("villager 1.jpg");
villager2Img=loadImage("villager 2.jpg");
villager3Img=loadImage("villager 3.jpg");
terrorist1Img=loadImage("terrorist1.jpg");
soldier1Img=loadImage("army1.jpg");
backgroundImg=loadImage("background 1.jpg");
bulletImg=loadImage("bullet1.jpg");
}
function setup() {
  canvas=createCanvas(displayWidth-10,displayHeight-200);

  engine=Engine.create();
  world=engine.world;

soldier1=createSprite(10,480,10,10);
soldier1.addImage(soldier1Img);
soldier1.scale=0.2;

bulletGroup=new Group();
villagerGroup=new Group();
//background1=createSprite(0,0,displayWidth,displayHeight);
//background1.addImage(backgroundImg);
//background1.scale=1.5;
//background1.x=background1.width/2;
}

function draw() {

 background(backgroundImg);
 Engine.update(engine);

 if (keyDown("space")){
  createBullet();
  }
 if(keyDown("right_arrow")){
   soldier1.velocityX=4;
   soldier1.velocityY=0;
 }
 if(keyDown("left_arrow")){
  soldier1.velocityX=-4;
  soldier1.velocityY=0;
}

//if(background1.x<0){
//  background1.x=background1.width/2;
//}


  Villagers();
  drawSprites();
}
function Villagers(){
  if(frameCount % 60===0){
    var villager1=createSprite(290,480,10,10);
    villager1.addImage(villager1Img);
  //  villager1.x=Math.round(random(280,320));
    villager1.scale=0.5;
    villagerGroup.add(villager1)
  }
}
function createBullet() {
  var bullet= createSprite(10, 200, 60, 10);
  bullet.addImage(bulletImg);
  bullet.x = soldier1.x;
  bullet.y=soldier1.y;
  bullet.velocityX = 10;
  bullet.lifetime = 100;
  bullet.scale = 0.05;
  bulletGroup.add(bullet);
  
   
}