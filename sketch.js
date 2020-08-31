const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=100;

var engine,world;
var random;
var drops = [];

var Thunder1,Thuder2,Thunder3,Thunder4;

var thunderCreatedFrame=0;

function preload(){

    Thunder1=loadImage('images/1.png')
    Thunder2=loadImage('images/2.png')
    Thunder3=loadImage('images/3.png')
    Thunder4=loadImage('images/4.png')

}

function setup(){
    engine = Engine.create();
    world = engine.world;

   createCanvas(400,800)
   umbrella = new Umbrella(200,200)
 
   //creating the drops according to the framCount

   if(frameCount % 150 === 0){

for(var i=0;i<maxDrops;i++){
    drops.push(new createDrop(random(0,400),random(0,400)));
}

   }
    
}

function draw(){
    Engine.update(engine);
    background(0);

    rand=Math.round(random(1,4));
    if(frameCount%80===0){
thunderCreatedFrame=frameCount;
thunder=createSprite(random(10,370),random(10,30),10,10);

switch(rand){

    case 1 : Thunder.addImage(Thunder1);
    break;
    case 2 : Thunder.addImage(Thunder2);
    break;
    case 3 : Thunder.addImage(Thunder3);
    break;
    case 4 : Thunder.addImage(Thunder4);
    break;
    default:break
}

    }

    //displaying the rain drops

    for(var i =0; i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].updateY();

    }
    drawSprites();
}   


