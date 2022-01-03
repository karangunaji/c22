class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
   this.c1 = loadImage("assets/cannonBase.png")
   this.c2 = loadImage("assets/canon.png")

    
  }
display()
{
  push ()
  imageMode(CENTER);
image(this.c2,this.x,this.y,this.width,this.height)

pop ()




image(this.c1,70,20,200,200)
noFill()

}



  
}
