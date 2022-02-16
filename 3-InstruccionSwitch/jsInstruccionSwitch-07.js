function mostrar()
{
	let destino;

	destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Se encuentra al sur de nuestro pais");
				break;
		case "Cataratas":
			alert("Se encuentra al norte de nuestro pais");
				break;		
		case "Mar del plata":
			alert("Se encuentra al este de nuestro pais");
				break;
		case "Ushuaia":
			alert("Se encuentra al sur de nuestro pais");
				break;
	}		


}//FIN DE LA FUNCIÓN