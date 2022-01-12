const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var arrow,playerimage;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
var options={
  isStatic:true
};

playerBase=Bodies.rectangle(200,350,180,150,options);
 World.add(world,playerBase);

 player=Bodies.rectangle(250,playerBase.position.y-160,50,180,options);
 World.add(world,player);

  //create player body
playerArcher=new playerArcher(340,playerBase.position.y-112,120,120);
arrow=new playerArrow(playerArcher.body.position.x,playerArcher.body.position.y,100,10);



}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
image(baseimage,playerBase.position.x,playerBase.position.y,180,150);
  //show the playerbase image using image() function
image(playerimage,payer.position.x,player.position.y,50,180);

  Engine.update(engine);

  playerArcher.display();
  arrow.display();

  if(keyCode==32){
    arrow.shoot(playerArcher.body.angle);
  }
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
