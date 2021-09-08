class Ball{
    constructor(x,y,r){
        var pro = {
            restitution:0.8
        }
        this.body = Bodies.circle(x,y,r,pro)
        this.r = r
        World.add(world,this.body)
    }
    display(){
     ellipseMode(RADIUS)
     fill("red")
     ellipse(this.body.position.x,this.body.position.y,this.r)    
    }   
   }
   