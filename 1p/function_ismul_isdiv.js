


function isMultipleof (x,y) {
	if(x%y==0)
	     return true;
	 else
	     return false;
}
function isDivisibleBy(a,b){
     return isMultipleof(a,b);
}
print(isMultipleof (3,6));
print(isDivisibleBy(3,6));