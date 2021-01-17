class Box{
  constructor (x,y,width,length) {
   
   var options={
   isStatic:false,
   restitution:0.3,
   friction:1,
   density:0.6,
   }
   this.body = Bodies.rectangle(x,y,width,length,options);
   this.width=width;
   this.length=length;
   World.add(world,this.body);
   this.visibility=255
  }
    display(){

     
     if(this.body.speed<3){
      strokeWeight(1);
      fill("pink");
      stroke(48,22,8);
      rectMode(CENTER)
      rect(this.body.position.x,this.body.position.y,this.width,this.length)
    }
    else{
    push()
    World.remove(world,this.body)
    this.visibility=this.visibility-5
    //tint(255,this.visibility)
    
   // rectMode(CENTER);
    //rect(this.body.position.x,this.body.position.y,this.width,this.length)
    pop()


    }
    console.log(this.body.speed)
 
 
    }
 }
