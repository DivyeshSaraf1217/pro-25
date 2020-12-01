var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ball=new Ball(200,600);
	 grounds=new ground(400,670);
	 box1=new bin(600,670,200,20);
	 box2=new bin(680,590,20,100);
	 box3=new bin(540,590,20,100)
	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background(0);
  ball.display();
  box1.display();
  box2.display();
  box3.display();
 grounds.display();

}
function keyPressed(){
	if (keyCode === UP_ARROW){
		console.log("keyispressed");
Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-100});
}

}

