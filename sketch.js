//Mission 2
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, sideR, sifeL, bottem;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	sideL=createSprite(510, 630, 20,100); 
	sideL.shapeColor=color(255,0,0); 
	sideLBody = Bodies.rectangle(530, 630, 20,100 , {isStatic:true} );
	World.add(world, sideLBody);

	sideR=createSprite(290, 630, 20, 100);
	sideR.shapeColor=color(255, 0, 0);
	sideRBody = Bodies.rectangle(530, 630, 20,100 , {isStatic:true} );
	World.add(world, sideRBody);


	bottem=createSprite(400, 670, 200, 20);
	bottem.shapeColor=color(255, 0, 0);
    bottomBody = Bodies.rectangle(530, 630, 20,100 , {isStatic:true} );
	World.add(world, bottomBody);


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    packageBody.scale = 1;
  }
}



