/*
ejercicio 9
alegre victor manuel

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let sueldoaumentado

	//ingreso monto del sueldo
	sueldo = parseInt(document.getElementById("txtIdSueldo").value);

	//calculo el 10% del sueldo
	aumento = sueldo * 0.1;

	//calculo el resultado final de sueldo con aumento
	sueldoaumentado = sueldo + aumento
	
	//muestro en cuadro resultado el monto final
	document.getElementById("txtIdResultado").value = sueldoaumentado;









}
