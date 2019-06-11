print('Introdusca el radio del circulo');
var R = Number(readline());
print('Introdusca el valor del punto x');
var x = Number(readline());
print('Introdusca el valor del punto x');
var y = Number(readline());
R=R*2;
var hipotenusa = ((x*x) + (y*y));
hipotenusa = Math.sqrt(hipotenusa);
print("La hipotenusa es de: "+ hipotenusa);

if(hipotenusa == R){
    print("El punto se encuentra sobre la circunferencia");
   }
if(hipotenusa < R){
   print("El punto se encuentra adentro del circulo");
 }
 
  else{
     print('El punto No se encuentra en el circulo');
     
 } 