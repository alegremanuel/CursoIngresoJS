/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let faranheit;
	let celcius;
	let mensaje;

	faranheit=parseInt(document.getElementById("txtIdTemperatura").value);

	celcius=(faranheit - 32) / 1.8;

	mensaje=("° faranheit equivale a " + celcius + "° celcius");

	alert(faranheit + mensaje);

	
}

function CentigradosFahrenheit () 
{
	let celcius;
	let faranheit;
	let mensaje;

	celcius=parseInt(document.getElementById("txtIdTemperatura").value);

	faranheit=(celcius *1.8) + 32;

	mensaje=("° celcius equivale a " + faranheit + "° faranheit");

	alert(celcius + mensaje);
	
}
