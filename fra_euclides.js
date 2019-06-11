function fracion (){
    let f1_1 = document.getElementById("f1_1").value
    let f1_2 = document.getElementById("f1_2").value
    let op = document.getElementById("tip").value
    let f2_1= document.getElementById("f2_1").value
    let f2_2= document.getElementById("f2_2").value
///////optener la fraccion::
    var apoint ={
        x:3,
        y:4
    }
    
    var bpoint={
        x:7,
        y:8
    }
    
    /*const eu = function euclides(x,y){
        if((x/y)%2==0){
    
            return"("+x/y+","+y/y+")";
    
        }else{
            var y1=y;
        for(var i=2;i<10;i++){
            if (y%i==0){
                for(var i1=2;i1<y;i1++){
                    if((y%i)==0){
                        for(var e =1;e<=i1;e++){
                            y1=y1/e;
                            x=x/e;
                            if(x%1==!0){y1=y1*e;x=x*e;
                            return {x:x,y:y1};
                             break;}
                        }
                    }else{y=y/i}
                }
            }
        }
    
                 }
              };*/
    
    const vali = function vali(p){
           var s= {x:null,y:null};
           
            for(var i=0;i<2;i++){
             var r=p.x;
             if(i>0){r=p.y
             if(r == 0){throw new Error('el denominador no puede ser Cero')}}
            if(r%1==0){
              if(i>0){s.y=r}else{s.x=r;}
            } else if(typeof(r)=='undefined'){
                if(i>0){s.y=0}else{s.x=0;}
            }else {  throw new Error('Datos No validos')}
           
            }return s;}
        
    
    class Fraction{
        /// se deve de validar
        constructor(n){
        this.n=vali(n);
    ///	this.d=validar(d);
    
        }
    
        sum(f){
             var s= {x:null,y:null};
            var n;
            var d;
            if (vali(f) instanceof Object){
                    if(this.n.y === f.y){
                n = this.n.x + f.x;
                d= this.n.y;
            }else{
    
         n = (this.n.x * f.y)+(this.n.y * f.x);
         d = this.n.y * f.y;
        }
        s={x:n,y:d};
        return(new Fraction(s));
            }
    
        };
        rest(f){
             var s= {x:null,y:null};
            var n;
            var d;
            if (vali(f) instanceof Object){
            if(this.n.y === f.y){
                n = this.n.x - f.x;
                d= this.n.y;
            }else{
    
         n = (this.n.x * f.y)-(this.n.y * f.x);
         d = this.n.y * f.y;
        }
        s={x:n,y:d};
            return(new Fraction(s));
            }
        
        };
    
        div(f){
             var s= {x:null,y:null};
            if (vali(f) instanceof Object){
            var n = this.n.x * f.y
            var d = this.n.y * f.x
            s={x:n,y:d};
            return(new Fraction(s));}
        };
    
        mul(f){///validate
         var s= {x:null,y:null};
        var n = this.n * f.n;
        var d = this.d * f.d;
        s={x:n,y:d};
        ///eunclides here
        return(new Fraction(s));
        };
    
    };
    
     
    ///function.exports = euclides;
        
    //const euclides = require (euclides);
    
    
    ///f1=new Fraction(4,5)
    /// fi.sum(f2)
    
}
