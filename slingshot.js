class SlingShot {
  constructor (bodyA,pointB) {
    var options ={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.1
    }
   this.slingshot=Constraint.create(options)
    World.add(world,this.slingshot)
    this.pointB=pointB
  }
  display(){
    if(this.slingshot.bodyA){
      var slingshotA=this.slingshot.bodyA.position
      var slingshotB=this.pointB
      line(slingshotA.x,slingshotA.y,slingshotB.x,slingshotB.y);
   }
  }
 fly(){
    this.slingshot.bodyA=null
 }
 attach(body){
   this.slingshot.bodyA=body
 }
}