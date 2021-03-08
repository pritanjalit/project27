class Bob {
    constructor(x,y,radius)   {
        var options= {
             'isStatic':false,
             'restitution':0.3,
             'density':1.2,
             'friction':0.5
        } 
        this.body = Bodies.circle(x, y, radius, options);
       this.radius=radius;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        strokeWeight(3);
        stroke ("red");
        circle(0, 0, this.radius);
        pop();
      }
    
    
    
}