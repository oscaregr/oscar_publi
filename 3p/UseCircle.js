const Point = require ('../../libs/oegr/geometry/point.js');
const Cuadrado = require ('../../libs/oegr/geometry/circle.js');

t = new Point(3,4);
let dis = 13;

cuadro= new Cuadrado(t,dis);

console.log(cuadro.toString());