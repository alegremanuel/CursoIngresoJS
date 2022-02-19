/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let acumPositivos=0;
	let numeroIngresado=0;
	let respuesta="s";
	let acumNegativos=1;
	
	while(respuesta == "n"){
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado)==true){
		 numeroIngresado=parseInt(prompt("ERROR, por favor ingrese un numero"));
		
	} 

	if (numero >=0){
		acumPositivos=acumPositivos+numeroIngresado;
	}

	else{
		acumNegativos=acumNegativos*numeroIngresado;
	}
		
	
	respuesta=prompt("Desea ingresar otro numero? s/n");

	}

	document.getElementById("txtIdSuma").value=acumPositivos;
	document.getElementById("txtIdProducto").value=acumNegativos;

}//FIN DE LA FUNCIÓN