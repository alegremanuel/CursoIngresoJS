function mostrar()
{
/*	let acumulador=0;
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

*/

/*Simil Parcial 4:
"Super Chino" Se pide el ingreso de mercadería de un supermercado, hasta que el usuario quiera, se pide:
Tipo(limpieza , comestible , otros)solo estos tres tipos
Nombre del producto (validar no sea número)
Importe del producto (no mayor a 1000 pesos)
Procedencia (importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d) el tipo de mercadería que mas aparece
e) el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/

let tipo:
let mercaderia;
let precio;
let procedencia;
let peso;

do{
	tipo=prompt("Ingrese tipo de mercaderia: limpieza/comestible/otro");
}while(isNaN(tipo)==false && tipo!="limpieza" && tipo!="comestible" && tipo!="otro");

}//FIN DE LA FUNCIÓN