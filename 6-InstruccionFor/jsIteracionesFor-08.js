function mostrar()
{
	let numero;
	let contador=0;
	let i;
	let mensaje;

	numero=parseInt(prompt("Ingrese un numero"));

	for(i=1;i<=numero;i++){

		if (numero%i==0){
			contador++
			
		}
	}

	if(contador==2){
		mensaje= "Es numero primo";
		}

	else{
		mensaje="No es numero primo";
		}

	alert(mensaje);

}//FIN DE LA FUNCIÓN