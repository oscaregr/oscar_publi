var apoint ={
	x:3,
	y:4
}

var bpoint={
	x:7,
	y:8
}

class Point{
    constructor(x, y){

	this.x=origen(x);
	this.y=origen(y);

    function origen(p){
       var s= {x:null,y:null};
       
        for(var i=0;i<2;i++){
         var r=p.x;
         if(i>0){r=p.y}
        if(r%1===0){
          if(i>0){s.y=r}else{s.x=r;}
        } else if(typeof(r)=='Undefined'){
            if(i>0){s.y=r}else{s.x=r;}
        }else {  throw new Error('Datos No validos')}
       
        }
        return s;
    };
    };
	
    distance(){
    
    var d1 = this.x.x - this.y.x;
    var d2 = this.x.y - this.y.y;
    d1=d1**2;
    d2=d2**2;
    return Math.sqrt(d1+d2);
    	
    };
    toString(){return"("+distance(this.x,this.y)+")";};
    //clone(){return new Point(this.x,this.y);};

};