
function texto() {
    let st = document.getElementById("cuadro").value
    ///document.getElementById("out").innerHTML = 'cantidad total de caracteres introducidos: ' + st.length
    
    document.getElementById("out1").innerHTML = 'cantidad total de palabras introducidas: ' + st.split(' ').length 

}
let calis = [30, -40, -20, -10, 40, 0,10,5];
const sum = (x,y) => x+y;
/*let doubleFE=
function(entrada){
    let result =[];
    entrada.forEach(number => {

    });
    return result;
};
*/

let prueba = function(en){
    var tot = null
    var y = 1
    let result =[];
    for(var x= 0;x<8;x++){
        for(var w = 0; w<9;w++){
            tot = en[x] + en[y] + en[w]
           // result.push = tot => if(tot==0){}
        }
    }
}

const mySum = myArray.reduce(sum, 0);


////jenerar tripletas en las que la suma de 0, de loas siguientes:
//// 30 -40 -20 -10 40 0 10 5.
//// las convinaciones no se deben repetir, 