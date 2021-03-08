
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 
var world,engine;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(100,100,10);
	bob2=new Bob(130,100,10);
	bob3=new Bob(160,100,10);
	bob4=new Bob(190,100,10);
	bob5=new Bob(220,100,10);
	roof= new Roof(300,100,150,10);
	rope1=new Rope(bob1.body,roof.body,-Bob.Radius*4,100);
	rope2=new Rope(bob2.body,roof.body,-Bob.Radius*4,100);
	rope3=new Rope(bob3.body,roof.body,-Bob.Radius*4,100);
	rope4=new Rope(bob4.body,roof.body,-Bob.Radius*4,100);
	rope5=new Rope(bob5.body,roof.body,-Bob.Radius*4,100);



  
}


function draw() {
 Engine.update(engine);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



