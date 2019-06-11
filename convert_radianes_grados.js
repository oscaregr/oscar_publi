function convert_radi() {
    let t = document.getElementById("radianes").value
    let o = (t * 57.2958);
    document.getElementById("out").innerHTML = o.toFixed(8) + " Grados."
}

function convert_gra() {
    let s = document.getElementById("grados").value
    let e = (s * 0.0174533);
    document.getElementById("out1").innerHTML = e.toFixed(8) + " Radianes."
}