/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit;
	let celcius;
	let mensaje;

	fahrenheit=parseInt(document.getElementById("txtIdTemperatura").value);

	celcius=(fahrenheit - 32) / 1.8;

	mensaje=("° fahrenheit equivalen a " + celcius + "° celcius");

	alert(fahrenheit + mensaje);

	
}

function CentigradosFahrenheit () 
{
	let celcius;
	let fahrenheit;
	let mensaje;

	celcius=parseInt(document.getElementById("txtIdTemperatura").value);

	fahrenheit=(celcius *1.8) + 32;

	mensaje=("° celcius equivalen a " + fahrenheit + "° fahrenheit");

	alert(celcius + mensaje);
	
}
