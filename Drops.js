class Drops {
    constructor(x,y) {
      var options = {
          isStatic: true,
          friction:0.1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
    
    }
  };
  