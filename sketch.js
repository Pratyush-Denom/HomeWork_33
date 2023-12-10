const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies

function preload(){
  bg_Image = loadImage("snow1.jpg");
  snowImage = loadImage("snow4.webp");
}




function setup() {
  createCanvas(windowWidth,windowHeight);
  character = createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world
  snow = new Snow(100,50)
  
  console.log(snow)
  World.add(world,snow);
}

function draw() {
  Engine.update(engine)
  background(bg_Image);
  fill ("Black"); 
  snow.display()
  drawSprites();
}