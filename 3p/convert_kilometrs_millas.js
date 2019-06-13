function convert_dolar() {
    let t = document.getElementById("kilometro").value
    let o = (t * 0.621371);
    document.getElementById("out").innerHTML = o.toFixed(2) + " Millas."
}

function convert_euro() {
    let s = document.getElementById("milla").value
    let e = (s * 1.609343502101154);
    document.getElementById("out1").innerHTML = e.toFixed(2) + " Kilometros."
}