function Distancia_ab(p1,p2){
    var d1 = p2.x - p1.x
    var d2 = p2.y -p1.y
    d1=d1**2
    d2=d2**2
    return Math.sqrt(d1+d2)

}


var aPoint = {//literal object
    x:3,
    y:4
}
var bPoint = {//literal object
    x:-3,
    y:-4
}
