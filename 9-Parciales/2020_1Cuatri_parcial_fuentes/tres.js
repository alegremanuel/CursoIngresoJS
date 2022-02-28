function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let Temperatura;
	let respuesta;
	let tempMax;
	let nombMayorTemp;
	let bandera=0;
	let cantMayoresViudos=0;
	let cantHombresSoV=0;
	let TerceraEdadFiebre=0;
	let acumHomSolteros;
	let contHomSolteros;
	let promEdadSolteros;
	let mensajeA;
	let mensajeB;
	let mensajeC;
	let mensajeD;
	let mensajeE;

	do{
		do{
		nombre=prompt("ingrese su nombre");
		}while(isNaN(nombre)==false);

		do{
		edad=prompt("Ingrese su edad");
		}while(isNaN(edad)==true && edad>99);

		do{
		sexo=prompt("Ingrese su sexo f/m");
		}while(sexo!="f" && sexo!="m");

		do{
		estadoCivil=prompt("Ingrese su estado civil: soltero/casado/viudo");
		}while(estadoCivil != "soltero" || estadoCivil !="casado" || estadoCivil !="viudo");

		do{
		Temperatura=parseFloat(prompt("Ingrese su temperatura"));
		}while(isNaN(Temperatura)==true && Temperatura<36 && Temperatura>40);

		if(bandera==0){
			tempMax=Temperatura;
			nombMayorTemp=nombre;
			bandera=1
		}
//a) El nombre de la persona con mas temperatura.
		if(Temperatura>tempMax){
			tempMax=Temperatura;
			nombMayorTemp=nombre;
		}
//b) Cuantos mayores de edad estan viudos
		if(estadoCivil=="viudo" && edad>17){
			cantMayoresViudos++;
		}
//c) La cantidad de hombres que hay solteros o viudos.
		if(sexo=="f" && estadoCivil != "casado"){
			cantHombresSoV++;
		}
//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if(edad>60 && Temperatura>38){
			TerceraEdadFiebre++
		}
//e) El promedio de edad entre los hombres solteros.
		if(sexo=="m" && estadoCivil=="soltero"){
			acumHomSolteros=acumHomSolteros+edad;
			contHomSolteros++
		}
		

		respuesta=prompt("Desea continuar ingresando productos? s/n");
	}while(respuesta==s);

//e) El promedio de edad entre los hombres solteros.
	promEdadSolteros=acumHomSolteros/contHomSolteros;
	
	mensajeA="La persona con mayor temperatura es "+nombMayorTemp;
	mensajeB="la cantidad de mayores viudos es "+cantMayoresViudos;
	mensajeC="La cantidad de hombres solteros viudos o solteros es "+cantHombresSoV;
	mensajeD="Los adultos con temperatura mayor a 38 son "+TerceraEdadFiebre;
	mensajeE="el promedio de edad entre los solteros es "+promEdadSolteros;

		
	
	alert("tres");
}
