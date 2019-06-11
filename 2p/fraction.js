class Fraction{
    /// se deve de validar
    constructor(n,d){
	this.n=n;
	this.d=d;
	
    };
    euclides(n,d){return d;};
    sum(f){};
    rest(f){};
    div(f){};
    mul(f){///validate
	var n = this.n * f.n;
	var d = this.d * f.d;
	///eunclides here
	return new Fraction(n,d);
    };
};

///f1=new Fraction(4,5)
