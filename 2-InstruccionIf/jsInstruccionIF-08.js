function mostrar()
{
	let edad;
	let estadocivil;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	estadocivil=document.getElementById("estadoCivil").value;

	if(edad>=18 && estadocivil == "Soltero");
	{
	alert("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN


/*
const a=10
const b=5
const c=8

if(a<b && a<c){alert("a es el menor")}
	else if (b<a && b<c){alert("b es el menor")}
		else{ alert("c es el menor")}
*/
