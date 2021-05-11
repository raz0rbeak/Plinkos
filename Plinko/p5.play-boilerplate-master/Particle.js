class Particle {
    constructor(x,y, radius){
        var options = {
            restitution: 0.4
        }
        this.body = Bodies.circle(x,y,this.radius, options);
        this.radius;
        this.color = color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x, pos.y)
        rotate (angle)
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
   
}    