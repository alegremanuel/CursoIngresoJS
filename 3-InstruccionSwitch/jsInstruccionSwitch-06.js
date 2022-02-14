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
		default:
			alert("Es de noche");
			}


}//FIN DE LA FUNCIÓN