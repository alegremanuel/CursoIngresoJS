function mostrar()
{
	let preciobase;
	let descuento;
	let aumento
	let preciofinal;
	let estacion;
	let destino;
	let mensaje;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	preciobase=15000;

if(estacion == "Invierno"){
	switch(destino){
		case "Bariloche":
			aumento=preciobase*0.20;
				preciofinal=preciobase+aumento;
					mensaje=preciofinal;
						alert(mensaje);

		}	
}




	
}//FIN DE LA FUNCIÓN