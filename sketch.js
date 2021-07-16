
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone, ground, chain;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone=new Stone(235,420,30); 

	mango1=new Mango(1100,110,30);
  mango2=new Mango(1170,140,30);
	mango3=new Mango(960,150,30);
	mango4=new Mango(1040,80,30);
	mango5=new Mango(900,180,30);
	mango6=new Mango(1020,240,30);
	mango7=new Mango(940,240,40);
	mango8=new Mango(1060,160,40);
	mango9=new Mango(1100,240,40);
	mango10=new Mango(1200,210,40);

	tree=new Tree(1050,590);

	ground=new Ground(width/2,600,width,20);

	chain=new Launcher(stone.body,{x:235,y:440})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 
}

function draw() {

  background("white");

  textSize(25);
  fill("red")
  text("Press Space to get a second Chance to Play",50 ,50);
  image(boy ,200,360,200,300);

  

  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display()
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone.display();

  ground.display();
  chain.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	chain.fly();
  
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  chain.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
    
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }