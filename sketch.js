
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render
const Constraint =Matter.Constraint
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	bobdiameter=40
	startx=width/2
	starty =height/4 + 500
	//Create the Bodies Here.
	roof=new Roof(450,150,550,60)
	bob1=new Bob(100,250);
	bob2=new Bob(170,250);
	bob3=new Bob(240,250);
	bob4=new Bob(310,250);
	bob5=new Bob(380,250);
	chain1=new rope(bob1.body,roof.body,-bobdiameter*2,0);
	chain2=new rope(bob2.body,roof.body,-bobdiameter*2,0);
	chain3=new rope(bob3.body,roof.body,-bobdiameter*2,0);
	chain4=new rope(bob4.body,roof.body,-bobdiameter*2,0);
	chain5=new rope(bob5.body,roof.body,-bobdiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  drawSprites();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
 roof.display();
}



