function mostrar()
{
	let numero;
	let contPares=0;
	let i;

	numero=parseInt(prompt("Ingrese un numero"));

	for(i=1;i<numero;i++){

		if(i%2==0){
			alert(i)
			contPares++;
		}

	}
	alert("Cantidad de numeros pares "+contPares);



}//FIN DE LA FUNCIÓN