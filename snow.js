class Snow{
constructor(x,y,r){
var options={
    restitution:0.4,
    isStatic:false
}
this.body=Bodies.circle(x,y,r,options)
this.x=x
this.y=y
this.r=r
this.image=loadImage("snow4.webp")
World.add(world,this.body)
}
display(){
push ()
translate (this.body.position.x,this.body.position.y)
rotate(this.body.angle)
fill ("white")
imageMode(CENTER)
image(this.image,0,0,25,25)
pop ()
    
}


}