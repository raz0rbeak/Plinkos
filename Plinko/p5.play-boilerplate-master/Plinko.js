class Plinko {
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 1
        }
        this.body = Bodies.circle(x,y,this.radius, options);
        this.radius=10;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x, pos.y)
        rotate (angle)
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,10,10);
        pop()
    }
   
}    