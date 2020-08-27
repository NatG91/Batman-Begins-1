const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=100;

var Thunder1,Thuder2,Thunder3,Thunder4;


for(var i=0;i<maxDrops;i++){
    drops.push(new createDrop(random(0,400),random(0,400)));
}



function preload(){

    Thunder1=loadImage('images/1.png')
    Thunder2=loadImage('images/2.png')
    Thunder3=loadImage('images/3.png')
    Thunder4=loadImage('images/4.png')

}

function setup(){
   canvas(400,400)
    
}

function draw(){
    Engine.update(engine);
    background(0);
    rand=math.round(random(1,4));
    if(frameCount%80===0){

Thunder=createSprite(random(10,370),random(10,30),10,10);

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
    
}   


