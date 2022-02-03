/*
ejercicio 3
alegre victor manuel

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{ 
	let nombreingresado;
	
	/*le pido que me traiga el valor de un documento en especifico
	por su nombre*/
	nombreingresado=document.getElementById("txtIdNombre").value;

	alert(nombreingresado);

}


