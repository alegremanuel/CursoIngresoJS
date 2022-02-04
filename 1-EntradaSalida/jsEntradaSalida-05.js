/*
ejercicio 5
alegre victor manuel


Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	/*asigno variables*/

	let nombre;
	let edad;

	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

//concatenar (+)   string --- variable---

	alert("usted se llama " + nombre + " y tiene " + edad + " años");
}

