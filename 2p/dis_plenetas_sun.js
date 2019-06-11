var Merciry = {
    Diameter : 3100,////miles
    DisSun : 36,////millions of miles
    TimeOrbit: '88 days',
    TimeRotate : '59 days'
};

var Venus = {
    Diameter : 7700,////miles
    DisSun : 67,////millions of miles
    TimeOrbit: '225 days',
    TimeRotate : '244 days'
};

var Earth = {
    Diameter : 7920,////miles
    DisSun : 93,////millions of miles
    TimeOrbit: '365 days',
    TimeRotate : '24 hrs'
};

var Mars = {
    Diameter : 4200,////miles
    DisSun : 141,////millions of miles
    TimeOrbit: '687 days',
    TimeRotate : '24 hrs 24 mins'
};

var Jupiter= {
    Diameter : 88640,////miles
    DisSun : 483,////millions of miles
    TimeOrbit: '11.9 years',
    TimeRotate : '9 hrs 50 mins'
};

var Saturn= {
    Diameter : 74500,////miles
    DisSun : 886,////millions of miles
    TimeOrbit: '29.5 years',
    TimeRotate : '10 hrs 39 mins'
};

var Uranus= {
    Diameter : 32000,////miles
    DisSun : 1782,////millions of miles
    TimeOrbit: '84 years',
    TimeRotate : '23 hrs'
};

var Neptune= {
    Diameter : 31000,////miles
    DisSun : 2793,////millions of miles
    TimeOrbit: '165 days',
    TimeRotate : '15 hrs 48 mins'
};

var Piuto= {
    Diameter : 1500,////miles
    DisSun : 3670,////millions of miles
    TimeOrbit: '248',
    TimeRotate : '6 days 7 hrs'
};

function distancia_ab(p2,p1){
	if(p1.DisSun != p2.DisSun){
	if (p1.DisSun < p2.DisSun){
	d1 = (p2.DisSun-p1.DisSun)
	} else{d1 = (p1.DisSun-p2.DisSun)}
     }else{d1=0;}
    return d1+' millions of miles';

    };
