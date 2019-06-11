function isodd (n) {
	 if(n%2==!0)
	     return true
	 else
	     return false

}

function isEven(n){
    return !isodd(n)
}
print(isodd(3));
print(isodd(2));
print(isEven(3));
print(isodd(3));
