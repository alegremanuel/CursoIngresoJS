function mostrar()
{
	let edad;

	//tomo la edad  
	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 18){
	alert("usted es menor de edad");
}
	if(edad >= 18){
	alert("usted es mayor de edad");

}

}//FIN DE LA FUNCIÓN