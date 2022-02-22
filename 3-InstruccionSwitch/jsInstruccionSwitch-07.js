function mostrar()
{
	let destino;
	let mensaje;

	destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			mensaje="Se encuentra al sur de nuestro pais";
				break;
		case "Cataratas":
			mensaje="Se encuentra al norte de nuestro pais";
				break;		
		case "Mar del plata":
			mensaje="Se encuentra al este de nuestro pais";
				break;
		case "Ushuaia":
			mensaje="Se encuentra al sur de nuestro pais";
				break;
	}		
		alert(mensaje);


}//FIN DE LA FUNCIÓN