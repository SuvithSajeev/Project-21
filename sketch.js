
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftSide;
var rightSide;


function setup() {
	createCanvas(1700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide  =new Ground(1400,600,20,120);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,25,ball_options);
    World.add(world,ball);

	
	rectMode(CENTER);
	ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
	ellipse(ball.position.x,ball.position.y,25);
	ground.display();
	leftSide.display()
	rightSide.display();
	force();
	Engine.update(engine);
	
}

function force(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.8,y:-1.8});

}


}
