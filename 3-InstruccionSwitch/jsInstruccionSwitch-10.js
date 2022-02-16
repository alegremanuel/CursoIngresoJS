function mostrar()
{
	let destino;
	let estacion;

	destino=document.getElementById("txtIdDestino").value;
	estacion=document.getElementById("txtIdEstacion").value;

	if(estacion="Invierno"){
		switch(destino){
			case "Bariloche":
				alert("Se viaja");
					break;
			default:
				alert("No se viaja");
					break
		}
	}

	if(estacion="Verano"){
		switch(destino){
			case "Mar del plata":
			case "Cataratas":
				alert("Se viaja");
					break
		default:
			alert("No se viaja");
		}
	}

}//FIN DE LA FUNCIÓN