/*pedir el ingreso de 10 mascotas
validar tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
*/

function mostrar()
{
  let mascota;
  let razaGato;
  let razaPerro;
  let edadPerros;
  let edadGatos;
  let edadOtros;
  let edadPajaro;
  let contPastor=0;
  let contToy=0;
  let contCallejero=0;
  let contSiames=0;
  let conTurco=0;
  let contPeterbald=0;
  let contGenerico=0;
  let i;

  for(i=0;i<9;i++){


    mascota=prompt("Ingrese tipo de mascota perro/gato/pajaro/otros");

    while(isNaN(mascota)==false && mascota !=perro && mascota !=gato && mascota !=pajaro && mascota !=otros);
      mascota=prompt("Ingrese tipo de mascota correcta");

    switch(mascota){

      case "perro":
      razaPerro=prompt("Ingrese la raza de su perro: pastor/toy/callejero");
      while(razaPerro!="pastor" && razaPerro!="toy" && razaPerro!="callejero"){
        razaPerro=prompt("Ingrese una raza de perro valida");

        if(razaPerro=="pastor"){
        contPastor++
      }
        break;

      case "toy":
        if(mascota=="perro"){
          contToy++;
          break;
        }

      case "callejero":
        if (mascota=="perro"){
          contCallejero++;
            break;
        }

      switch(gatos)

      case "siames":
        if(mascota=="gato"){
        contSiames++
        }
         
      case "turco":
        if(mascota=="gato"){
        conTurco++
        }

      case "peterbald":
        if(mascota=="gato"){
        contPeterbald++
        }
    
      case "generico":
        if(mascota=="gato"){
        contGenerico++
        }

      }



    }


  }

  alert("dos");
}
