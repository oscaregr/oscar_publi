function numeros() {
        let t = document.getElementById("cuantos").value
    /// let o = (t * 57.2958);
        let lis = " ";
        let res = null;
        let min = 0;
        let max = 0 ;
        let tot = null;
        for(let x = 0; x<t;x++){
        res = res + Math.round(Math.random()*10);
        lis = lis + res +"\n";
        document.getElementById("random").innerHTML =lis;
        tot = tot + res;
        if (min!=0 & max!=0){
            if(res < min){ min = res;}
            if(res > max){ max = res;}
        }else{min = res; max = res;}
        
        }
        document.getElementById("out1").innerHTML = min;
        document.getElementById("out2").innerHTML = max;
        document.getElementById("out3").innerHTML = tot/t;
       
    

}
