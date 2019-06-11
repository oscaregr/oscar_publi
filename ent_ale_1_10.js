function texto() {
    let res = " ";
    for(let x = 0; x<10;x++){
    res = res + Math.round(Math.random()*10) + "\n" ;
    }
    
    document.getElementById("out").innerHTML = 'resultado: ' + res;
}