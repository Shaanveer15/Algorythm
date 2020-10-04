var r1 ;
var r2 ;

function setup() {
  createCanvas(800,400);
  r1=createSprite(400, 200, 40, 80);
  r1.shapeColor="red";

  r2=createSprite(300, 200, 80, 40);
  r2.shapeColor="red";
}

function draw() {
  r1.x=World.mouseX;
  r1.y=World.mouseY;

  if(r1.x-r2.x<r1.width/2+r2.width/2&&
    r2.x-r1.x<r1.width/2+r2.width/2&&
    r1.y-r2.y<r1.height/2+r2.height/2&&
    r2.y-r1.y<r1.height/2+r2.height/2){
    r1.shapeColor="white";
    r2.shapeColor="white";
  }
  else{
    r1.shapeColor="red";
    r2.shapeColor="red";
  }


  
  
  background(0);  
  drawSprites();
}