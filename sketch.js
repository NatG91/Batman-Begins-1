const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=100;

var engine,world;
var random;
var drops = [];

var Thunder1,Thunder2,Thunder3,Thunder4;
var thunder
var umbrella

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

   createCanvas(1600,800)
   umbrella = new Umbrella(200,200)
 
   //creating the drops according to the framCount

   if(frameCount % 150 === 0){

for(var i=0;i<maxDrops;i++){
    drops.push(new Drops(random(0,400),random(0,400)));
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

    case 1 : thunder.addImage(Thunder1);
    break;
    case 2 : thunder.addImage(Thunder2);
    break;
    case 3 : thunder.addImage(Thunder3);
    break;
    case 4 : thunder.addImage(Thunder4);
    break;
    default:break
}
thunder.scale = random(0.3,0.6)
}   

    if(thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    
    }

    //displaying the rain drops

    for(var i =0; i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].updateY();

    }
    umbrella.display();
    drawSprites();
}   


