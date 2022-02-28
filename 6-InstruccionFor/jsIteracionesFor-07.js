function mostrar()
{
	let numero;
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


}//FIN DE LA FUNCIÓN