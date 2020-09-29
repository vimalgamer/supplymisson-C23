var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	
    boxX = width/2 - 100;
    boxY = 610;
  
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	var packageBody_options = {
		//restitution:0.7
      isStatic: true
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options);
	World.add(world, packageBody);
	//Matter.Body.setStatic(packageBody,true);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
   
	box1 = new Box(boxX,boxY,15,100);
	box2 = new Box(boxX + 200,boxY,15,100);
	box3 = new Box(boxX + 100,boxY + 45,185,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  
  box1.display();
  box2.display();
  box3.display();

  //keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}






