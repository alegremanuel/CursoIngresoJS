function mostrar()
{
	/*let i;

	for(i=1;i<=10;i++){

		document.write(i+"<br>");
	}
*/

/*Debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas,
de cada persona debemos obtener los siguientes datos:
Nombre (validar que no sea número)
Obra Social ("PAMI", "OSDE" o "otras"),
Edad(solo mayores de edad, más de 17),
Temperatura corporal(validar por favor)
Sexo (validar femenino, masculino, no binario)
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con OSDE de más de 60 años.
b) el nombre y temperatura de la mujer PAMI más joven.
c) cuanto sale el viaje total sin descuento.
d) si hay más del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%,
 que solo mostramos si corresponde.
*/

let nombre;
let obraSocial; //pami,osde,otras
let edad; //mayores a 17
let temperatura; //37 a 40
let sexo; //f,m,nb
let respuesta="s";
let contOsdeMayores=0;
let edadMujerPami;
let nombreMujerPami;
let tempMujerJoven;
let flag=0;
let precioViaje=600;
let contGral=0;
let viajeDesc;
let viajeSinDesc;
let contPami=0;
let contOsde=0;
let contOtra=0;

	while(respuesta=="s"){

		nombre=prompt("ingrese su nombre");
		while(isNaN(nombre)==false){
			nombre=prompt("ingrese su nombre correctamente");
		}

		obraSocial=prompt("ingrese su obra social");
		while(isNaN(obraSocial)==false && obraSocial!="pami" && obraSocial!="osde" && obraSocial!="otra"){
			nombre=prompt("ingrese su obra social correctamente");

			if(obraSocial=="pami"){
				contPami++;
			}
			else if(obraSocial=="osde"){
				contOsde++;
			}
			else{
				contOtra++;
			}
		}

		edad=parseInt(prompt("ingrese su edad"));
		while(isNaN(edad)==true && edad<18 && edad>99){
			nombre=prompt("debe ser mayor de edad");
		}

		temperatura=parseInt(prompt("ingrese su temperatura en °C"));
		while(isNaN(nombre)==true && temperatura<37 && temperatura>40){
			nombre=prompt("ingrese su nombre correctamente");
		}
		sexo=prompt("ingrese su sexo f/m/nb");
		while(isNaN(sexo)==false && sexo!="m" && sexo!="f" && sexo!="nb"){
			sexo=prompt("ingrese su sexo correctamente");
		}
//a) La cantidad de personas con OSDE de más de 60 años.
		if(obraSocial=="osde" && edad>=60){
			contOsdeMayores++
		}
//b) el nombre y temperatura de la mujer PAMI más joven.
		if(flag==0 && sexo=="m"){
			edadMujerPami=edad;
			nombreMujerPami=nombre;
			tempMujerJoven=temperatura;-

			flag=1;
		}
		if(sexo=="m" && edad>edadMujerPami){
			edadMujerPami=edad;
			nombreMujerPami=nombre;
			tempMujerJoven=temperatura;

		
		}
	respuesta=prompt("desea continuar ingresando datos? s/n");
	}

//c) cuanto sale el viaje total sin descuento.
contGral=contOsde+contPami+contOtra;
viajeSinDesc=contGral*precioViaje;
}