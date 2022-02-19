/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	/*alert("esto funciona de maravilla");
}
*/

/*
Pedir a una persona que fue de vacaciones, la distancia que viajo y el tiempo que tardo,
para calcular la velocidad e informar: 60 km/h = muy lento;
Hasta 80km/h= lento; Hasta 100 = buen ritmo;
Hasta 120 = ahí de la ley; Más = eso no se hace >121
*/

	let distancia;
	let tiempo;
	let velocidad;
	let mensaje;

	distancia=parseFloat(prompt("Ingrese la distancia recorrida"));
	tiempo=parseFloat(prompt("Ingrese el tiempo que tardo"));

	velocidad=distancia*tiempo;
	
	if(velocidad<=60){
		mensaje="Muy lento";
	}
	else if(velocidad>60){
		mensaje="Lento";
	}
	else if(velocidad<=100){
		mensaje="Buen ritmo";
	}
	else if(velocidad>=120){
		mensaje="Ahi de la ley";
	}
	else{
		mensaje"eso no se hace"
	}	

	

	alert(mensaje);

}
