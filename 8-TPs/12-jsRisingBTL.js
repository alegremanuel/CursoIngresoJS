/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edad;
 	let sexo;
 	let estadoCivil;
    let sueldo;
    let legajo;
    let nacionalidad;
    let mensaje;
/*
    edad=parseInt(prompt("Ingrese su edad"));

    if(edad>=18 || edad<=90){
        document.getElementById("txtIdEdad").value=edad;
    }

    sexoIngresado=prompt("ingrese su sexo")
    
    switch(sexo){
        case "f":
            mensaje="Femenino";
                break;
        case "m":
            mensaje="Masculino";
                break;

    document.getElementById("txtIdSexo").value=mensaje;
  */  
    

    do{
        edad=parseInt(prompt("Ingrese su edad"));
    }
    while(edad>17 || edad<91 || isNaN(edad)==true);

    document.getElementById("txtIdEdad").value=edad;


    




}