class Ball {
    constructor(x,y,r) {
        var options={
            isStatic:false,
            //restitution:2,
            friction:0.2,
            density:1.2
        }

        this.image = loadImage('paper.png');

        this.x=x;
        this.y=y;
        this.r=70
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        World.add(world, this.body);
    }
    display(){
        var paperpos= this.body.position;
        //image(this.image,200,390)
         
        push()
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r);
       // strokeWeight(3);
        //fill('lightgreen');
        //ellipseMode(CENTER);
        //ellipse(0,0,this.r,this.r);
      
        pop()
    }

}