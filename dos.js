/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar() {
  let marca;
  let precio;
  let peso;
  let tipo;
  let pesototal = 0;
  let marcacaro;
  let premax = 0;
  let premin = 0;
  let marcabarato;
  let flag = 0;
  let flagS = 0;
  let respuesta = "s";
  while (respuesta == "s") {
    marca = prompt("Ingrse la marca");
    do {
      precio = parseInt(prompt("Ingrese el precio"));

    } while (isNaN(precio) || precio < 0);
    peso = parseFloat(prompt("Ingrese el peso en kg"));
    do {
      tipo = prompt("Ingrese el tipo");
    } while (tipo != "solido" && tipo != "liquido");
    respuesta = prompt("Desea ingresar otro producto? s/n");

    pesototal = pesototal + peso;

    if ((flag == 0 && tipo == "liquido") || (precio > premax && tipo == "liquido"));

    {
      premax = precio;
      marcacaro = marca;
      flag = 1;
    }
    if ((flagS == 0 && tipo == "solido") || (precio < premin && tipo == "solido"));
    {
      premin = precio;
      marcabarato = marca;
      flagS = 1;
    }
  }
  document.write("El peso total de la compra es: " + pesototal + "<br>");
  document.write("La marca más cara de los liquidos es :" + marcacaro + "<br>");
  document.write("La marca del más barato de los solidos es: " + marcabarato + "<br>");
} 
