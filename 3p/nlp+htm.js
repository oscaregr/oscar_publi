function lenguaje() {
    let n = document.getElementById("random").value
    document.getElementById("out1").innerHTML = n.length;
        document.getElementById("out2").innerHTML =n.split('.').length 
        document.getElementById("out3").innerHTML =   n.split(' ').length 
        document.getElementById("out4").innerHTML =  n.split('\n').length;

}
