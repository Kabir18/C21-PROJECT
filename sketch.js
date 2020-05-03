//declaring objects
var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  //creating canvas
  createCanvas(1200,800);

  //making two objects and giving them colour and debuging it
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(100, 100, 50, 50);
  object1.shapeColor = "green";
  object2 = createSprite(200,200, 50, 50);
  object2.shapeColor = "green";
  object3 = createSprite(300, 300, 50, 80);
  object3.shapeColor = "green";
  object4= createSprite(400, 400, 50, 80);
  object4.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
}

function draw() {
  background(0,0,0);
  bounceOff(movingRect,fixedRect);  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;  


//function declaration
if (isTouching(movingRect,object1)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
  object1.shapeColor = "blue";
  object2.shapeColor = "blue";
  object3.shapeColor = "blue";
  object4.shapeColor = "blue";
}
else {
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  object1.shapeColor = "green";
  object2.shapeColor = "green";
  object3.shapeColor = "green";
  object4.shapeColor = "green";
}

  drawSprites();
}
