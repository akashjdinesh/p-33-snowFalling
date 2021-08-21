var snowGroup;
var snow4, snow5;

function preload(){
  bg1=loadImage("snow3.jpg");
  snow4=loadImage("Snow4.png");
  snow5=loadImage("Snow5.png");

}

function setup() {
  createCanvas(800,600);
  snowGroup= new Group();

}

function draw() {
  background(bg1);  
    
  drawSprites();
  fill("gold");
  textSize(20)
  text("*press down arrow key for snow fall", 50,100);
  
}

function keyPressed(){
  if (keyCode===DOWN_ARROW) {
    snow = createSprite(random(100, 1000), 0, 100, 100);
    snow.velocityY = 6;
    snow.scale=0.17;
    var rand = Math.round(random(1,2));
    switch(rand){
        case 1: snow.addImage("snowImage1",snow4);
        break;
        case 2: snow.addImage("snowImage2", snow5);
        break;
    }
    snowGroup.add(snow);
}
}


