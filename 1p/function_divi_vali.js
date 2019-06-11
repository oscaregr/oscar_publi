function isZero(arg){
    if(arg === 0)
	throw new Error('zero div');
    else
	return arg;
}

function isNumber(x){
	if (typeof x == 'number'){
	return true;}
else{
	return false;
	}

}

function multi(a,b){
    
    
    
	if (isNumber(a) && isNumber(b))	{
	    if(isZero(a) && isZero(b)) {
             return a/b;
            }
	}   else{print('No es valido');}   
	
}

//el print se corrigio
print (multi(11,245));
print('.. done ');
