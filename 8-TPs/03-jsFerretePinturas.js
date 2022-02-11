/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
	let centigrados;
	let mensaje;

	fahrenheit=parseInt(document.getElementById("txtIdTemperatura").value);

	centigrados=(fahrenheit - 32) / 1.8;

	mensaje=("° fahrenheit equivalen a " + centigrados + "° centigrados");

	alert(fahrenheit + mensaje);

	
}

function CentigradosFahrenheit () 
{
	let centigrados;
	let fahrenheit;
	let mensaje;

	centigrados=parseInt(document.getElementById("txtIdTemperatura").value);

	fahrenheit=(centigrados *1.8) + 32;

	mensaje=("° centigrados equivalen a " + fahrenheit + "° fahrenheit");

	alert(centigrados + mensaje);
	
}
