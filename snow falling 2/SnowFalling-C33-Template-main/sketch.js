const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const

var engine,world;
var backgroundImg;

function preload(){
backgroundImg = loadImage("snow2.jpg");

}
 
 function setup() {
  engine = Engine.create();
  world = engine.world;
 
  createCanvas(1350,600);

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  //strokeWeight(4);
  drawSprites();
}