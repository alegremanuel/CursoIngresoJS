function mostrar()

{
	/*let edad;

	//se toma la edad por id
	edad=parseInt(document.getElementById("txtIdEdad").value);

	//se aplica la condicion
	if(edad == 15) {
	//si caumple dicha condicion se muestra mensaje	
	alert("niña bonita");

}

}//FIN DE LA FUNCIÓN */



/*ingresar el nombre y los datos requeridos para calcular el IMC, 
e informar a la persona si es: Bajo peso <18.5; Peso normal 18,5-24.9; 
Pre Obesidad 25-26.9; Obesidad I 27-29.9; Obesidad II 30-34.9; Obesidad III >40
*/

	let peso;
	let altura;
	let imc;
	let mensaje;

	peso=parseFloat(prompt("Ingrese su peso"));
	altura=parseFloat(prompt("Ingrese su altura"));

	imc=peso/(altura*altura);

	if(imc<18.5){
		mensaje"Usted presenta bajo peso";
	}
	else if(imc>=18.5 || imc<=24.9){
		mensaje="Usted presenta un peso normal";
	}
	else if(imc>=25 || imc<=26.9){
		mensaje"Usted presenta pre obesidad";
	}
	else if(imc>=27 || imc<=29.9){
		mensaje"Usted presenta obesidad I";
	}
	else if(imc>=30 || imc<=34.9){
		mensaje"Usted presenta obesidad II";
	}
	else{
		mensaje"Usted presenta obesidad III";	
	}
		alert(mensaje);
}
