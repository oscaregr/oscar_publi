class Circle{
    constructor(x, y){
	this.x=x;
	this.y=y;

    };
    toString(){return "( x: "+this.x+", y: "+this.y+")";};
    distance(p){};
    ///clone(){return new Circle(this.x,this.y);};
};
module.exports =  Circle;

/////p2 = new point(3, 4);
