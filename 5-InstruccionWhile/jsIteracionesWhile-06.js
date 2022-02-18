function mostrar()
{
	let acumulador=0;
	let numeroIngresado;
	let i=0;
	let promedio

	while(i<5){
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numeroIngresado;
		i++;
	}

		promedio=acumulador/5;

		document.getElementById("txtIdSuma").value = acumulador;
		document.getElementById("txtIdPromedio").value = promedio;


	
}//FIN DE LA FUNCIÓN