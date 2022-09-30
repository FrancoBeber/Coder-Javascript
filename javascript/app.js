/*Declaro variables*/

let nombre;
/*Solicito al usuario ingresar su nombre*/
nombre = ingresoDatos();
alert("Bienvenido " + nombre);
menuIngreso(nombre);

/*Declaro funciones*/
/*Funcion que calcula el promedio de un grupo de numeros ingresados*/
function calculaPromedio() {
  let promedio1 = 0;
  let suma = 0;
  let ingresado;
  let fin = false;
  let condicional;
  let contador = 0;
  while (fin == false) {
    ingresado = parseInt(prompt("Ingrese el monto del producto"));
    suma += ingresado;
    contador++;
    condicional = parseInt(
      prompt("¿Desea agregar otro producto? \n1 - SI \n0 - NO")
    );
    if (condicional == 0) {
      promedio1 = suma / contador;
      return promedio1;
    }
  }
}
/*Funcion que calcula la suma de numeros ingresados*/
function sumaPrecios() {
  let suma = 0;
  let actual = 0;
  let respuesta = 0;
  let i = 0;
  let continuar = true;
  while (continuar == true) {
    actual = parseInt(prompt("ingrese valores"));
    suma += actual;
    i++;
    respuesta = prompt("Desea continuar ? \n1 - SI \n0 - NO");
    if (respuesta == 0) {
      continuar = false;
      return suma;
    }
  }
}
/*Funcion que solicita datos de ingreso*/
function ingresoDatos() {
  let nombre;
  let apellido;
  let nombreCompleto;
  alert("Antes de iniciar ingrese sus datos...");
  nombre = prompt("Ingrese su nombre: ");
  apellido = prompt("Ingrese su apellido: ");
  nombreCompleto = nombre + " " + apellido;
  return nombreCompleto;
}
/*Funion que calcula descuentos*/
function calculaDescuento(suma) {
  let opcion = 0;
  let precioTotal = 0;
  let precioDescuento = 0;
  opcion = parseFloat(
    prompt(
      "Ingrese el % de descuento que posee \nDebe ingresar con formato flotante ej: 0.25"
    )
  );

  precioDescuento = parseFloat(suma * opcion);
  precioTotal = suma - precioDescuento;
  return precioTotal;
}
/*Funcion que muestra menu al usuario*/
function menuIngreso(nombre) {
  let prom = 0;
  let opcion = 0;
  let sum = 0;
  let desc = 0;
  let resp = 0;
  alert(
    "Bienvenido " +
      nombre +
      " elija la opcion que desea usar: \n 1 - Calcular Promedio \n 2 - Suma de productos y descuentos \n 3 - Salir"
  );
  opcion = prompt("Opcion: ");
  switch (opcion) {
    case "1":
      alert("Ingrese el precio de cada producto para calcular el promedio");
      prom = calculaPromedio();
      alert("El promedio de los montos ingresados es " + prom);
      break;
    case "2":
      alert("Ingrese el precio de cada producto para calcular la suma");
      sum = sumaPrecios();
      alert("El monto total es de: " + sum);
      resp = prompt("Desea calcular su descuento? \n 1 - Si \n 2 - No");
      if (resp == 1) {
        desc = calculaDescuento(sum);
        alert("Su precio total a pagar es de: " + desc);
        break;
      }
      break;
    case "3":
      alert("Chau, que tenga un buen dia " + nombre);
      break;
    default:
      alert("La opcion que ingreso es invalida");
      break;
  }
}
