let v = prompt('Que tabla deseas')
let tabla = ' ';
for (let a=0; a<11;a++){
    tabla = tabla + '' + a + ' X ' + v + ' = ' + (a*v) + '<br>';
    
}document.getElementById("t").innerHTML = tabla ;
