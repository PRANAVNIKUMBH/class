const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine; 
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  
  ground = new Ground(200,390,400,20)
  topview =new Ground(200,10,400,20)
  left = new Ground(10,200,20,400)
  right = new Ground (390,200,20,400)
  ball = new Ball(230,30,40)

  button = createImg("push.png")
  button.position(20,30)
  button.size(50,50)
  button.mouseClicked(function(){
   Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-0.9})
  })
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display()
  topview.display()
  left.display()
  right.display()
  ball.display()
}

