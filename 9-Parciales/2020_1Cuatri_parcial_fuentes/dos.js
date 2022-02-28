function mostrar()
{
  let producto;
  let cantidad;
  let precio;
  let respuesta;
  let impBruto;
  let impDesc;
  let descuento;
  let cantBolsaCal=0;
  let cantBolsasArena=0;
  let cantBolsasCem=0;
  let mayorCantBolsas;
  let precioMax=0;
  let prodMayor;
  let bandera=0;
  let mensajeA;
  let mensajeB;
  let mensajeC;
  let mensajeD;

    do{

      do{
       producto=prompt("Ingrese un producto sea arena/cal/cemento");
      }
      while(producto !="arena" && producto!="cemento" && producto!= "cal");
      
      do{
        precio=parseFloat(prompt("Ingrese el precio del producto"));
      }
        while(precio<0 || isNaN(precio)==true);
    
      do{         
      cantidad=parseInt(prompt("Ingrese la cantidad"));
      }
       while(isNaN(cantidad)==true);
//El tipo mas caro
      if(bandera==0){
        precioMax=precio;
        prodMayor=producto;
        bandera=1
      }
      if(precio>precioMax){
        precioMayor=precio;
        prodMax=producto;
      }

      if(producto=="cal"){
        cantBolsaCal=cantBolsaCal+cantidad;
      }
      else if (producto=="arena"){
        cantBolsasArena=cantBolsasArena+cantidad;
      }
       else{
        cantBolsasCem=cantBolsasCem+cantidad;
      }
      

      respuesta=prompt("Desea continuar ingresando productos? s/n");
    }while(respuesta=="s"); //fin do while
    
//Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
//Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
    if(cantidad>10){
      descuento=15
    }
    else if(cantidad>30){
      descuento=30
    }
    else{
      descuento=0
    }
// Informar el tipo con mas cantidad de bolsas.
    if(cantBolsaCal>cantBolsasArena && cantBolsaCal>cantBolsasCem){
      mayorCantBolsas=cantBolsaCal;
    }
    else if(cantBolsasArena>cantBolsaCal && cantBolsasArena>cantBolsasCem){
      mayorCantBolsas=cantBolsasArena;
    }
    else{
      mayorCantBolsas=cantBolsasCem;
    }
    

//a) El importe total a pagar , bruto sin descuento
    impBruto=precio*cantidad;
//b) el importe total a pagar con descuento(solo si corresponde)
    impDesc=impBruto-impBruto*descuento/100

    mensajeA="El precio bruto es "+impBruto;
    mensajeB="El precio con descuento es "+impDesc;
    mensajeC="el tipo con mayor cantidad de bolsas es "+mayorCantBolsas;
    mensajeD="el tipo mas caro es "+prodMayor;

    alert(mensajeA+"\n"+mensajeB+"\n"+mensajeC+"\n"+mensajeD);

}