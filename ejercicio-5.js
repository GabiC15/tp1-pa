let cuenta, edad2;

for (cuenta = 1; cuenta <= 10; cuenta++) {
  edad2 = prompt("Introduzca su edad (en cifras)");
  edad2 = parseInt(edad2);

  if (edad2 < 18) {
    alert("Es usted menor de edad");
  } else {
    alert("Es usted mayor de edad");
  }
}
