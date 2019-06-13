function texto() {
 
    let res = " ";
    for(let x = 0; x<10;x++){
    res = res + Math.random() + "\n" ;
    }
    document.getElementById("out").innerHTML = 'resultado: ' + res;
}
