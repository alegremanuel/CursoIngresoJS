/*ejercicio if 6
alagre victor manuel*/

function mostrar()
{
	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){
		alert("usted es mayor de edad");
 
		}

	if(edad >=13 && edad<=17){
		alert("usted es adolescente");
		}

	if(edad<13){
		alert("usted es un niño");
		}

/*OTRA OPCION PODRIA SER:

	if(edad>=18){
		alert("usted es mayor de edad")
		}
else{
	if(edad<13){
		alert("usted es un niño")
		}
	else{
		alert("usted es adolescente")
	} */

}//FIN DE LA FUNCIÓN