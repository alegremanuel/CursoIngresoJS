
/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?
*/

function mostrar(){

	let nombre;
	let carrera;
	let estadoCarrera;
	let sexo;
	let edad;
	let nota;
	let respuesta;
	let contAlumProg=0;
	let cantMujProg=0;
	let contAlumPsico=0;
	let contAlumDiseño=0;
	let contNb=0;
	let edadMayorPisco;
	let nombMayorPsico;
	let sexoMayorPsico;
	let nombreNbPs;
	let notaNbPs=0;
	let estadoNbPs
	let alumFinalizantes;


	do{

		do{
		nombre=prompt("Ingrese su nombre");
		}while(isNaN(nombre)==false);

		do{
		carrera=prompt("Ingrese la carrera que cursa: programacion/psicologia/diseño grafico");
		}while(carrera!="programacion" && carrera!="psicologia" && carrera!="diseño grafico");

		do{
		estadoCarrera=prompt("Ingrese el estado de su carrera en curso-abandono-finalizado");
		}while(estadoCarrera!="en curso" && estadoCarrera !="abandono" && estadoCarrera!="finalizado");

		do{
		sexo=prompt("Ingrese su sexo f/m/nb");
		}while(sexo!="f" && sexo!="m" && sexo!="nb");

		do{
		edad=prompt("Ingrese su edad");
		}while(isNaN(edad)==true && edad<18);

		do{
		nota=prompt("Ingrese su nota entre 1 y 10");
		}while(isNaN(nota)==true && nota>10 || nota<1);

//A. Cantidad total de alumnos de cada carrera.
		switch(carrera){
			case "programacion":
			contAlumProg++
//B. Cantidad total de mujeres que cursan la carrera de programación
			if(sexo=="f"){
				cantMujProg++
			}
			break;

			case"psicologia":
			contAlumPsico++
//E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
				if(bandera==0){
				edadMayorPisco=edad;
				nombMayorPsico=nombre;
				sexoMayorPsico=sexo;

				bandera=1
				}
//F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)

				if(sexo=="nb" && notaNbPs<nota){
					nombreNbPs=nombre;
					notaNbPs=nota;
					estadoNbPs=estadoCarrera;
				}
				break;

			case"diseño grafico":
			contAlumDiseño++
				break;
		}
//C. Cantidad de alumnos no binarios.
		if(sexo=="nb"){
			contNb++;
		}

		respuesta=prompt("desea ingresar otro alumno? s/n")
	}while(respuesta==s);

//D. Promedio de notas de los alumnos finalizantes.
	if(estadoCarrera=="finalizado"){
		alumFinalizantes=contAlumProg+contAlumPsico+contAlumDiseño
	}
		promFinalizantes=alumFinalizantes/3;
	
//G. ¿Cuál es la carrera que tiene más alumnos?
	if(contAlumDiseño>contAlumPsico && contAlumDiseño>contAlumProg){
		carreraMasAlum=contAlumDiseño;
	}
	else if(contAlumPsico>contAlumProg){
		carreraMasAlum=contAlumPsico;
	}
	else{
		carreraMasAlum=contAlumProg;
	}

	document.write()
}
