
function fracion (){
let f1_1 = document.getElementById("f1_1").value
let f1_2 = document.getElementById("f1_2").value
let op = document.getElementById("tip").selectedIndex
let f2_1= document.getElementById("f2_1").value
let f2_2= document.getElementById("f2_2").value
let fa = 0;
let ta =0;
    var apoint ={
        x:f1_1,
        y:f1_2
    }

    var bpoint={
        x:f2_1,
        y:f2_2
    }
   
///////optener la fraccion::
    
        

        
    
    const eucli = function eucli(w,p){
        for(var k = 11;k>2;k--){
            if((w/k)%1 ==0 && (p/k)%1==0){
                document.getElementById("res").innerHTML = (w/k)+" / "+(p/k);
                break;
            }else{
                document.getElementById("res").innerHTML = w+" / "+p;
            }
        }
        
    }
    
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
                n = (this.n.x*1) + (f.x*1);
                d= this.n.y;
            }else{
    
          n = (this.n.x * f.y)+(this.n.y * f.x);
         d = this.n.y * f.y;
        }
        fa = n;
        ta = d;
        s={x:n,y:d};
       eucli(fa,ta);
        ///return (new Fraction(s));
        
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
        fa = n;
        ta = d;
        s={x:n,y:d};
        eucli(fa,ta);
          ////  return(new Fraction(s));
            }
        
        };
    
        div(f){
             var s= {x:null,y:null};
             var n;
             var d;
            if (vali(f) instanceof Object){
             n = this.n.x * f.y
             d = this.n.y * f.x
            s={x:n,y:d};
            fa = n;
           ta = d;
           eucli(fa,ta);
           /// return(new Fraction(s));}
        };
        };
        mul(f){///validate
         var s= {x:null,y:null};
       var n = this.n.x * f.x;
       var d = this.n.y * f.y;
        s={x:n,y:d};
        fa = n;
        ta = d;
        eucli(fa,ta);
        ///eunclides here
       /// return(new Fraction(s));
        };
    
    };

    let f = new Fraction(apoint)
    if(op == '0'){
        f.sum(bpoint);
    }else if(op == '1'){
        f.rest(bpoint);
    } else if(op == '2'){
        f.mul(bpoint);
    }else if(op == '3'){
        f.div(bpoint);
    }
     
    ///function.exports = euclides;
        
    //const euclides = require (euclides);
    
    
    ///f1=new Fraction(4,5)
    /// fi.sum(f2)
    

   
        
    };

    