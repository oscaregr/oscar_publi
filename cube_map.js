let numero = [1,2,3,4,5,6];

let cube = function (list) {
    return list.map(function(number){
        return number * number * number;
    });
};
console.log(cube(numero));