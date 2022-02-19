/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variables
	numeroIngresado=parseInt(prompt("Ingrese un numero"));

	while(isNaN(numeroIngresado)==true){
			numeroIngresado=parseInt(prompt("ERROR ingrese un numero"));
	}

	numeroMinimo=numeroIngresado;
	numeroMaximo=numeroIngresado;

	respuesta=prompt("Desea continuar ingresando numeros? s/n");

	while(respuesta=="s"){
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado)==true){
				numeroIngresado=parseInt(prompt("ERROR ingrese un numero"));
		}
		if(numeroIngresado<numeroMinimo){
				numeroMinimo=numeroIngresado;
		}
		else if(numeroIngresado>numeroMaximo){
				numeroMaximo=numeroIngresado;
		}
		respuesta=prompt("Desea continuar ingresando numeros? s/n");
	}
	
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;

	

}//FIN DE LA FUNCIÓN