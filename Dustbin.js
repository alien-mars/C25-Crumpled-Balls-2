class Dustbin {
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/dustbingreen.png");
        World.add(world,this.body); 
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        //fill("skyblue");
        image(this.image,pos.x,pos.y,this.width,340);
    }
}