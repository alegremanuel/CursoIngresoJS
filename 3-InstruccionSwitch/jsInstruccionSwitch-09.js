/*function mostrar()
{
	let preciobase;
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

*/
function mostrar()
{
let destino;
let estacion;
const PRECIO = 15000;
let aumento=0; 
let descuento=0;
let precioFinal;

destino = document.getElementById("txtIdDestino").value;
estacion = document.getElementById("txtIdEstacion").value;

switch(estacion){
	case "Invierno":
		if(destino == "Bariloche"){
			aumento = 20;
		}
		else if(destino == "Mar del plata"){
			descuento = 20;
		}
		else{
			descuento = 10;
		}
		break;
		
	case "Otoño":
	case "Primavera":
		if(destino != "Cordoba"){
			aumento = 10;
		}
		break;

	case "Verano":
		if(destino=="Cataratas" || destino=="Cordoba"){
			aumento=10;
		}
		else if(destino == "Mar del plata"){
			aumento=20;
		}
		else{ 
		(destino=="Bariloche");
			descuento=20;
		}
	}

	if(aumento != 0){
		precioFinal = PRECIO + PRECIO * aumento/100;
	}else if(descuento != 0){
		precioFinal = PRECIO - PRECIO * descuento/100;
	}
	else{
		precioFinal = PRECIO;
	}

	alert ("EL precio final es: " + precioFinal);



}//FIN DE LA FUNCIÓN