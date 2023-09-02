const edad1 = 70;
const sexo = "M";

if (edad1 < 0) {
  console.log("Edad invalida");
}

if (sexo == "M") {
  if (edad1 < 65) {
    console.log("No es jubilado");
  } else {
    console.log("Es jubilado");
  }
} else if (sexo == "F") {
  if (edad1 < 60) {
    console.log("No es jubilada");
  } else {
    console.log("Es jubilada");
  }
} else {
  console.log("Sexo no valido");
}
