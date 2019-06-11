class Hora{
    constructor(h,m,s){
        this._hora=vali(h);
        this._minuto=vali(m);
        this._segundo =vali(s);

        function vali(f){
            if(f%1===0){
                return f;
            }else{throw new Error('Tipo de dato no valido')

            }
        }
    };
    getMinuts(){
        return this._minuto;
    }
    setMinuts(m){
        this._minuto=m;
    }
    getSecounts(){
        return this._segundo;
    }
    setSecounts(s){
        this._segundo=s;
    }
    getHours(){
        return this._hora;
    }
    setHours(h){
        this._hora=h;
    }

    tick(){
        this.segundo++;

        if(this.segundo<59)
        {   this.segundo=0; 
            this.minuto++
            if(this.minuto<59){
                this.minuto=0;
                this.hora++
                if(this.hora <23){
                    this.hora=0;
                }
            }
        }
            ///console.log(""+this._hora+"/"+this._minuto+"/"+this._segundo+"");
        
        console.log("hora:"+this._hora+"/minuto:"+this._minuto+"/segundo:"+this._segundo+"")
    }
}

let tiempo = new Hora(23,59,59)

tiempo.tick()