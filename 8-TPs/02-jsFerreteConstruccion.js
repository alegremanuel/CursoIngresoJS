/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let perimetro;
	let alambre;
	let mensaje;

	largo=parseFloat(document.getElementById("txtIdLargo").value);
	ancho=parseFloat(document.getElementById("txtIdAncho").value);

	perimetro=(largo + ancho) *2;

	alambre=perimetro *3;

	mensaje="se necesitan " + alambre+ " metros";

	alert(mensaje);


}

function Circulo () 
{
let radio;
let totalradio;
let alambre;
let mensaje;

radio=parseInt(document.getElementById("txtIdRadio").value);

totalradio=2*3.14*radio;

alambre= totalradio * 3;

mensaje="se necesitan " + alambre + " metros";

alert(mensaje);




	
}

function Materiales () 
{
	let ancho;
	let largo;
	let superficie;
	let cemento;
	let cal;
	let mensaje;

	largo=parseFloat(document.getElementById("txtIdLargo").value);
	ancho=parseFloat(document.getElementById("txtIdAncho").value);

	superficie = largo * ancho;

	cemento = superficie * 2;

	cal = superficie * 3;

	mensaje="se necesitan " + cemento + " de cemento y " + cal + " de cal";

	 alert(mensaje); 
	
}
