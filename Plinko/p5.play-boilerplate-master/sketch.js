const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies

var particles= [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var Score = 0




function setup() {
  createCanvas(800,800);
engine = Engine.create()
world = engine.world;
ground = new Ground(width/2, height, width, 20)
for( var K=0; K<=width; K=K+80){
  divisions.push(new Division(K,height-divisionHeight/2,10,divisionHeight))
}
for(var J = 75; J<= width; J=J+50){
  plinkos.push(new Plinko(J, 75))
}
for(var J = 50; J<= width-10; J=J+50){
  plinkos.push(new Plinko(J, 175))
}
for(var J = 75; J<= width; J=J+50){
  plinkos.push(new Plinko(J, 275))
}
for(var J = 50; J<= width-10; J=J+50){
  plinkos.push(new Plinko(J, 375))
}
}

function draw() {
  background(150,0,255);  
  drawSprites();
  ground.display();

  for( var K=0; K<divisions.length; K++){
    divisions[K].display()
  }
  for( var I=0; I<plinkos.length; I++){
    plinkos[I].display()
  }
  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10))
  }
  for( var J=0; J<particles.length; J++){
    particles[J].display()
  }
}