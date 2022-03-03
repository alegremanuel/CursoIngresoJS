function mostrar()
{
/*	let numero;
	let contDivisoress=0;
	let i;

	numero=parseInt(prompt("Ingrese un numero"));

	for(i=1;i<numero;i++){

		if(numero%i==0){
			alert(i)
			contDivisoress++;
		}

	}

	alert("Cantidad de numeros divisores "+contDivisoress);

*/



/*Simil Parcial 4:
"Super Chino" Se pide el ingreso de mercadería de un supermercado, hasta que el usuario quiera, se pide:
Tipo(limpieza , comestible , otros)solo estos tres tipos
Nombre del producto (validar no sea número)
Importe del producto (no mayor a 1000 pesos)
Procedencia (importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d) el tipo de mercadería que mas aparece
e) el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/

let tipo;
let mercaderia;
let precio;
let procedencia;
let peso;
let respuesta;
let precioMasALto;
let masPesado;
let masBarato;
let contLimp=0;
let contComestible=0;
let contOtros=0;
let nombreMasPesado;
let nombreMasCaro;
let masBaratoElab;
let nombreElab;
let tipoMasCant;
let contImport=0;
let contNac=0;
let contElab=0;
let acumPesoLimp=0;
let acumPesoComes=0;
let acumPesoOtros=0;
let promPesoCom;
let promPesoLimp;
let promPesoOtros;
let porcProdElab;
let flag1=0;
let flag2=0;
let flag3=0;
let contGeneral=0;

do{

	do{
		tipo=prompt("Ingrese tipo de mercaderia: limpieza/comestible/otro");

	}while(isNaN(tipo)==false || tipo!="limpieza" && tipo!="comestible" && tipo!="otro");

	do{
		mercaderia=prompt("Ingrese nombre de la mercaderia");

	}while(isNaN(mercaderia)==false)

	if(isNaN(mercaderia)==true){
		contGeneral++;
	}

	do{
		precio=parseFloat(prompt("Ingrese precio"));

	}while(isNaN(precio)==true || precio>1000);
//b) el NOMBRE del mas caro de todos los productos
	if(flag1==0){
		precioMasALto=precio;
		nombreMasCaro=mercaderia;
		flag1=1
	}
	if(precio>precioMasALto){
		precioMasALto=precio;
		nombreMasCaro=mercaderia;
	}

	do{
		procedencia=prompt("Ingrese procedencia del producto: importado/nacional/elaborado");

	}while(isNaN(procedencia)==false && tipo!="importado" && tipo!="nacional" && tipo!="elaborado");
		
		if(procedencia=="importado"){
			contImport++
		}else if(procedencia=="importado"){
			contNac++;
		}else{
			contElab++
		}

	do{
		peso=parseFloat(prompt("Ingrese el peso de la mercaderia en kg"));


	}while(isNaN(peso)==true && peso>30);
//a) el NOMBRE del mas pesado de los comestibles
	if(flag2==0 && tipo=="comestible"){
		masPesado=peso;
		nombreMasPesado=mercaderia;
		flag2=1;
	}
	if(peso>masPesado && tipo=="comestible"){
		masPesado=peso;
		nombreMasPesado=mercaderia;
	}
//c) el NOMBRE del mas barato de los elaborados
	if(flag3==0 && procedencia=="elaborado"){
		masBaratoElab=precio;
		nombreElab=mercaderia;
		flag3=1;
	}
	if(precio<masBaratoElab && procedencia=="elaborado"){
		masBaratoElab=precio;
		nombreElab=mercaderia;
	}

	switch(tipo){
		case "limpieza":
		contLimp++;
		acumPesoLimp=acumPesoLimp+peso

		case "comestible":
		contComestible++;
		acumPesoComes=acumPesoComes+peso;

		case "otro":
		contOtros++;
		acumPesoOtros=acumPesoOtros+peso;
	}

	respuesta=prompt("desea ingresar otro producto? s/n");

}while(respuesta=="s");

//d) el tipo de mercadería que mas aparece
if(contLimp>contComestible && contLimp>contOtros){
	tipoMasCant="limpieza";
}else if(contComestible>contOtros && contOtros>contLimp){
	tipoMasCant="comestible"
}else{
	tipoMasCant="otros";
}
//e) el porcentaje de productos elaborados por sobre el total
porcProdElab= contElab*100/contGeneral;

//f) el promedio de pesos por cada tipo ingresado
promPesoLimp=acumPesoLimp/contLimp;
promPesoCom=acumPesoComes/contComestible;
promPesoOtros=acumPesoOtros/contOtros;

alert("el nombre del mas pesado es "+nombreMasPesado);
alert("el producto mas caro es "+nombreMasCaro);
alert("el producto mas barato de los elaborados es "+nombreElab);
alert("el tipo que mas aparece es "+tipoMasCant);
alert("el porcentaje de productos elaborados es "+porcProdElab);
alert("el promedio de peso de limpieza "+promPesoLimp+" el de comestibles es "+promPesoCom+" y el de otros es "+promPesoOtros);

}//FIN DE LA FUNCIÓN