
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var left , right
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20)
    right = new Ground(750,600,20,120)
    left  = new Ground(600,600,20,120)

	var ball_options={
		isStatic : false,
		restitution :0.3,
		friction : 0,
		density : 1.2
	}

	ball = Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)
	

	rectMode(CENTER);
	ellipseMode(RADIUS)
	

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  ellipse(ball.position.x,ball.position.y,20)
  
  ground.show()
  right.show()
  left.show()
  
  
  keyPressed()

  


  drawSprites();
 
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function keyPressed(){
	if(keyCode = UP_ARROW){
		hForce()
}
	}



