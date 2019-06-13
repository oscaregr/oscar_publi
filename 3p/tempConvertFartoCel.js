
// this may be a class, object, module, or function
//
function convert() {
    let t = document.getElementById("temp").value
    let o = (t * (9/5))+32
    document.getElementById("out").innerHTML = o.toFixed(2) + " degrees C"
}
//(32 °F − 32) × 5/9 = 0 °C
//(32 °C × 9/5) + 32 = 89.6 °F
