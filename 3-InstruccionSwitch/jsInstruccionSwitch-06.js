function mostrar()
{
	let hora;

	hora=document.getElementById("txtIdHora").value;

	switch(hora>=7 && hora<=11){
		case true:
			alert("Es de mañana");
				break;
			}

	switch(hora>=12 && hora<=19){
		case true:
			alert("Es de tarde");
				break
			}

	switch(hora>=20 && hora<=24){
		case true:
			alert("Es de noche");
				break
			}

	switch(hora>=0 && hora<=6){
		case true:
			alert("Es de noche");
				break

			}

	switch(hora<0 || hora>24){
		case true:
			alert("La hora no existe");

			}


}//FIN DE LA FUNCIÓN