function convert_dolar() {
    let t = document.getElementById("dolar").value
    let o = (t * 0.88);
    document.getElementById("out").innerHTML = o.toFixed(2) + " Euros."
}

function convert_euro() {
    let s = document.getElementById("euros").value
    let e = (s * 1.13);
    document.getElementById("out1").innerHTML = e.toFixed(2) + " Dolares."
}