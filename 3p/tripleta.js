let calis = [30, -40, -20, -10, 40, 0,10,5];
let newar = [ ]; 
let array = [];
let tot = 0;
let acom = ' ';

for(let lug = 0;lug<9;lug++){
    for(let x = 1;x<9; x++){

   
    for(let vue= 2;vue<9;vue++){
        tot = (calis[lug]) + (calis[x])+ (calis[vue]);

        if(tot === 0){
          var qo=1;
          
            newar.push( array=[calis[lug],calis[x],calis[vue]]);
                 
           
        }
    }
    }
  
}

/*
newar = ["30, -40, 10↵", "30, -20, -10↵", "30, -10, -20↵", "-40, 40, 0↵", "-40, 0, 40↵", "-20, -20, 40↵", "-20, 40, -20↵", "-20, 10, 10↵", "-10, 0, 10↵", "-10, 10, 0↵", "-10, 5, 5↵", "40, -40, 0↵", "40, -20, -20↵", "0, -40, 40↵", "0, -10, 10↵", "0, 0, 0↵", "0, 10, -10↵", "10, -20, 10↵", "10, -10, 0↵", "10, 0, -10↵", "10, 10, -20↵", "5, -10, 5↵", "5, 5, -10↵"]
 var s = newar.length;
 var qo = 0;
 let we = " ";
 var a = 0;
   var entrada = "";
 for(a; a < s;a++){
 for(qo;qo < 8;qo++){

    let cre = acomto.length;
      ////let we = ""+ +"";
      for(var i =0;i<cre+1; i++){

      
    if (newar[a].split(calis[qo]).length>2 && acomto[i] != newar[a] && entrada !=newar[a] ){
       //// for(var po = cre;cre<=0;po--){
          entrada = newar[a]
       ///if(acomto[i] == acomto[po] && acomto[po]!= entra){
           
       
            acomto.push(newar[a]);}

            /// }
           ///}
           } 
        }

    
    qo = 0;
}*/
console.log(newar);