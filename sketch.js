const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

 var backgorund1;
 var snow1,snowimg,characterimg,character,snowman,snowmanimg,engine,world
 
function preload(){

background1=loadImage("snow2.jpg")
snowimg=loadImage("snow4.webp")

}





function setup() {

  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  if (frameCount%90===0){
snow1=new Snow(random(width/2-10,width/2+10),10,10)


  }



  


}

function draw() {
  background(background1);  
  Engine.update(engine)
  snow1.display()
  drawSprites();
}