/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let acumulador;
	let respuesta;
	let contador=0;
	let acumulador=0;
	let respuesta;
	let promedio;

	do{
		numero=parseInt(prompt("Ingrese un numero"));
		respuesta=prompt("Desea ingresar otro numero? s/n")
	} 
		while(respuesta = "s");
		acumulador=acumulador+numero;


	document.getElementById("txtIdSuma").value=acumulador;
	

}//FIN DE LA FUNCIÓN