function isNumber(x){
	if (typeof x == 'number'){
	return true;}
else{
	return false;
	}

}
function res(a,b){
    
    
    
	if (isNumber(a) && isNumber(b))	{
	    return a-b;
	}    
	
}

//el print se corrigio
print (res(3,4));
print('.. done ');
