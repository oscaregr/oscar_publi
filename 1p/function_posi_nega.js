

function isInteger (x) {
	if(x%1==0)
	     return true;
	 else
	     return false; 

}

function isPositive(n){
       if(isInteger(n) == true)
         if (n>=0)
           return 'Positivo';
          else
           return 'Negativo';
       else
         return 'Valor no entero';
}

function isNegative(a){
     print(isPositive(a));
}
print(isPositive(2.7998));
print(isNegative(-3));