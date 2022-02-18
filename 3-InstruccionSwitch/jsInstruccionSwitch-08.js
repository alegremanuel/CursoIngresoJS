function mostrar()
{
	let destino;

	destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Hace frio");
				break;
		case "Cataratas":
			alert("Hace calor");
				break;
		case "Mar del plata":
			alert("Hace calor");
				break;
		case "Ushuaia":
			alert("Hace Frio");
				break;
	}

/*
	let destino

	destino=document.getElementById("txtIdDestino").value;

	if(destino== "Barilocho || destino =="Ushuaia"){
		alert("Hace frio");
	}
	else if (destino=="Cataratas" || destino "Mar del plaata"){
		alert("Hace calor");
	}

}//FIN DE LA FUNCIÓN