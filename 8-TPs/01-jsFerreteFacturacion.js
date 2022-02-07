/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let resultado;
	let mensaje;

	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

	resultado = precio1 + precio2 + precio3;

	mensaje = "el precio total es " + resultado;

	alert(mensaje);

}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}