/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let mensaje

	do{
		sexoIngresado=prompt("ingrese su sexo")
	}
	while(sexoIngresado !="f" && sexoIngresado !="m");

	mensaje="Sexo Validado"
	
	document.getElementById("txtIdSexo").value=mensaje;

}//FIN DE LA FUNCIÓN