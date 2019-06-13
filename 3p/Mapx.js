let numero = [3,3,4,2,1,3];
let square = function (list) {
    return list.map(function(numero){
        if (numero == 3 ){return 'a'}else{
            if (numero == 2 ){return 'b'}else{
                if (numero == 1 ){return 'c'}else{
                    return 'undefined'
                }
            }
        }
    });
};
console.log(square(numero));

let arrow = lista => lista.map(elemento => elemento == 3 ? elemento = 'a': elemento ==2 ? elemento = 'b': elemento == 1 ? elemento = 'c':"undefined");
console.log(arrow(numero));