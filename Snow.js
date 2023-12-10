class Snow{
    constructor(x,y){
        this.body = Bodies.circle(x,y,200,)
        this.image = loadImage("snow4.webp")
        World.add(world,this.body);
    }

     display(){
         push ()
         translate (this.body.position.x,this.body.position.y)
         rotate (this.body.angle)
         image (this.image,0,0,200);
         pop();

     }
}