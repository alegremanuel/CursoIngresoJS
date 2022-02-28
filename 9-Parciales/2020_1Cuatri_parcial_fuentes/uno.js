
function mostrar()
{
	let producto;
	let precio;
	let cantidad;
	let cantMax;
	let prodMayor;
	let marca;
	let fabricante;
	let fabAlcohol
	let cantAlcohol;
	let acumJabon;
	let precioMin;
	let mensajeA;
	let mensajeB;
	let mensajeC;


	for(i=0;i<=5;i++){
		
		do{
			producto=prompt("Ingrese un producto sea barbijo/alcohol/jabon");
		}
			while(producto !="alcohol" && producto!="barbijo" && producto!= "jabon");
			
		
				
		do{
		precio=parseFloat(prompt("Ingrese el precio del producto"));
		}
			while(precio<100 || precio>300 || isNaN(precio)==true);
							

		do{
			cantidad=parseInt(prompt("Ingrese la cantidad"));
		}
			while(cantidad<0 || cantidad>1000 || isNaN(cantidad)==true);

		marca=prompt("Ingrese la marca");

		fabricante=prompt("Ingrese fabricante");

		

		if(producto=="alcohol" && precio<precioMin){
			precioMin=precio;
			cantAlcohol=cantidad;
			fabAlcohol=fabricante;

		}else if(producto=="jabon"){
			acumJabon=acumJabon+cantidad;
		}

		if(cantidad>cantMax){
			cantMax=cantidad
			prodMayor=producto;

		}

	}//aca terminaria el for

		mensajeA="del alcohol mas barato hay "+cantAlcohol+"y son del fabricante "+fabricante;
		mensajeB="el producto con mas unidades es "+prodMayor;
		mensajeC="en total hay "+acumJabon+" de jabones";

		alert(mensajeA+"\n"+mensajeB+"\n"+mensajeC);//

}
