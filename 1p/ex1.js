print('Dame el primer numero:');
var a = Number(readline());
print('Dame el segundo numero:');
var b = Number(readline());
print('Dame el tercer numero:');
var c = Number(readline());
///1,2,0
if (a == 1){
	print('El primer numero es neutro multiplicativo');	
}
if(b == 1){
	print('El segundo numero es neutro multiplicativo');
}
if(c == 1){ 
	print('El tercer numero es neutro multiplicativo');
}
if(a > -1){
  print('El cuadrado de Nom.1 es: '+a*a);
}
if(b > -1){ 
  print('El cuadrado de Nom.2 es: '+b*b);
}
if(c > -1){ 
  print('El cuadrado de Nom.3 es: '+c*c);
}


print('La suma de los tres numeros es: ' + (a+b+c));
var r =b*2;
var i = 4*a*c;
var raiz = r-i;
var x= Math.sqrt(raiz);
print('El primer resultado cuadratico es: ' +((-b) + x)/(2*a)));
print('El segundo resultado cuadratico es: ' +((-b) - x)/(2*a)));
