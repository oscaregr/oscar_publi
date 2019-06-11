var aPoint = {//literal object
    x:3,
    y:4,
    distancia_ab: function (p2){
    var d1 = p2.x - x
    var d2 = p2.y -y
    d1=d1**2
    d2=d2**2
    return Math.sqrt(d1+d2)

    }
}
var bPoint = {//literal object
    x:-3,
    y:-4,
    distancia_ab: function (p1){
    var d1 = x - p1.x
    var d2 = y -p1.y
    d1=d1**2
    d2=d2**2
    return Math.sqrt(d1+d2)
    }
}