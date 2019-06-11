print('Escribe un numero: ');
var a = Number(readline());

switch(a){

	case 1:{print('Lunes');break;}
	case 2:{print('martes');break;}
	case 3:{print('miercoles');break;}
	case 4:{print('jueves');break;}
	case 5:{print('viernes');break;}
	case 6:{print('sabado');break;}
	case 7:{print('domingo');break;}
	default:print('error de entrada '+a);
}
