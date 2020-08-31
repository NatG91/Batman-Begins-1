class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true,
      }
      this.image=loadImage('images/walking_1')
      this.body = Bodies.circle(x,y,50,options);
      this.radius=50;
      World.add(world, this.umbrella);
    }
    display(){
      var pos =this.umbrella.position;
      imageMode(CENTER);
     image(this.image,pos.x, pos.y,y+70,300,300);
      //if(this.rain.position.y>height){
        //Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    //}
    
    }
  }