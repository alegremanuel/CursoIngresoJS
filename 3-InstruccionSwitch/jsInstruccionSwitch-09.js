function mostrar()
{
	let preciobase;
	let descuento;
	let porcentaje
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
			porcentaje=preciobase*0.20;
				preciofinal=preciobase+porcentaje;
					mensaje="el precio de su viaje es de $" + preciofinal;
						alert(mensaje);

		}	
}

if(estacion == "Invierno"){
	switch(destino){
		case "Cataratas":
		case "Cordoba":
			porcentaje=preciobase*0.10;
				preciofinal=preciobase-porcentaje;
					mensaje="el precio de su viaje es de $" +preciofinal;
						alert(mensaje);

		}	
}

if(estacion == "Invierno"){
	switch(destino){
		case "Mar del plata":
			porcentaje=preciobase*0.20;
				preciofinal=preciobase-porcentaje;
					mensaje="el precio de su viaje es de $" +preciofinal;
						alert(mensaje);

		}	
}
	
if(estacion == "Verano"){
	switch(destino){
		case "Bariloche":
			porcentaje=preciobase*0.20;
				preciofinal=preciobase-porcentaje;
					mensaje="el precio de su viaje es de $" +preciofinal;
						alert(mensaje);
		}	
}

if(estacion == "Verano"){
	switch(destino){
		case "Cordoba":
		case "Cataratas":
			porcentaje=preciobase*0.10;
				preciofinal=preciobase+porcentaje;
					mensaje="el precio de su viaje es de $" +preciofinal;
						alert(mensaje);
		}	
}

if(estacion == "Verano"){
	switch(destino){
		case "Mar del plata":
			porcentaje=preciobase*0.20;
				preciofinal=preciobase+porcentaje;
					mensaje="el precio de su viaje es de $" +preciofinal;
						alert(mensaje);
		}	
}

if(estacion == "Otoño"){
	switch(destino){
		case "Bariloche":
		case "Cataratas":
		case "Mar del plata":
			porcentaje=preciobase*0.10;
				preciofinal=preciobase+porcentaje;
					mensaje="el precio de su viaje es de $" +preciofinal;
						alert(mensaje);
					break;	
		default:
			mensaje="el precio de su viaje es de $" +preciobase;
			alert(mensaje);
		}
		
}

if(estacion == "Primavera"){
	switch(destino){
		case "Bariloche":
		case "Cataratas":
		case "Mar del plata":
			porcentaje=preciobase*0.10;
				preciofinal=preciobase+porcentaje;
					mensaje="el precio de su viaje es de $" +preciofinal;
						alert(mensaje);
					break;	
		default:
			mensaje="el precio de su viaje es de $" +preciobase;
			alert(mensaje);
		}
		
}

}//FIN DE LA FUNCIÓN