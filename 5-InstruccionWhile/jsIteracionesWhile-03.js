/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{	//defino variable
	let claveIngresada;

	//pido al usuario ingrese clave
	claveIngresada=prompt("ingrese el numero clave");

	//condicion para repetir codigo
	while(claveIngresada != "utn750"){

	//repite si la ingresada no fue correcta
	claveIngresada=prompt("Clave incorrecta, ingrese clave nuevamente.");

	}
	
}//FIN DE LA FUNCIÓN
