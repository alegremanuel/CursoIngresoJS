/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let acumulador=0;
	let respuesta;
	let contador=0;
	let respuesta="s";
	let promedio;

	
	while(respuesta == "s"){
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador=acumulador+numero;
		contador=contador++;
		respuesta=prompt("desea ingresar otro numero? s/n");
		}

		promedio=acumulador/contador;
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdSuma").value=promedio;

}//FIN DE LA FUNCIÓN