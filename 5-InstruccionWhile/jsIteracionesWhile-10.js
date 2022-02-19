/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numeroIngresado;
	let respuesta;
	let contNegativos=0;
	let contPositivos=0;
	let contCeros=0;
	let contPares=0;
	let acumPositivos=0;
	let acumNegativos=0;
	let promPositivos;
	let promNegativos;
	let diferencia;

	numeroIngresado=parseInt(prompt("Ingrese un numero"));

	while(isNaN(numeroIngresado)==true){
		prompt("ERROR ingrese un numero");
	}

	respuesta=prompt("Desea continuar ingresando numeros? s/n");

	while(respuesta =="s"){
		numeroIngresado=parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado)==true){
			prompt("ERROR ingrese un numero");
		}
		respuesta=prompt("Desea continuar ingresando numeros? s/n");

		if(numeroIngresado<0){
			acumNegativos=acumNegativos+numeroIngresado;
			contNegativos++;
		}
		else if(numeroIngresado==0){
			contCeros++;
		}
		else{
			acumPositivos=acumPositivos+numeroIngresado;
			contPositivos++;
		}
		if(numeroIngresado%2==0){
			contPares++;
		}
	}

	promNegativos=acumNegativos/contPositivos;

	promPositivos=acumPositivos/contPositivos;

	diferencia=contPositivos-contNegativos;

	document.write("La suma de negativos es "+acumNegativos);
	document.write("La suma de positivos es "+acumPositivos);
	document.write("La cantidad de positivos es de "+contPositivos);
	document.write("La cantidad de negativos es de "+contNegativos);
	document.write("La cantidad de numeros pares es de "+contPares);
	document.write("El promedio de numeros negativos es de "+promNegativos);
	document.write("El promedio de numeros positivos es de "+promPositivos);
	document.write("La diferencia entre numeros positivos y negativos es de "+diferencia);


}//FIN DE LA FUNCIÓN