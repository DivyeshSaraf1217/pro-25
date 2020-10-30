
class Ball{
constructor(x,y){
var options ={
density : 0.60,
friction:0.5,
isStatic:false,
restitution:0.3
}
this.body = Matter.Bodies.circle(x,y,35,options);
        World.add(world, this.body);
        this.image = loadImage("sprites/paper.png");
           }
   
display(){
   var  posx=this.body.position.x;
       var   posY=this.body.position.y;
    ellipseMode(CENTER);
    ellipse(posx, posY, 70);
    imageMode(CENTER);
    image(this.image, posx, posY, 115,115);
   }
}
