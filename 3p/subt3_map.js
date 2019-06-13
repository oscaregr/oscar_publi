let numero = [1,2,3,4,5,6];

let square = function (list) {
    return list.map(function(number){
        return number -3;
    });
};
console.log(square(numero));