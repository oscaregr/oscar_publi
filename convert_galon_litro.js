function convert_galon() {
    let t = document.getElementById("galones").value
    let o = (t * 3.78541);
    document.getElementById("out").innerHTML = o.toFixed(2) + " Litros."
}

function convert_litro() {
    let s = document.getElementById("litros").value
    let e = (s * 0.264172);
    document.getElementById("out1").innerHTML = e.toFixed(2) + " Galones."
}