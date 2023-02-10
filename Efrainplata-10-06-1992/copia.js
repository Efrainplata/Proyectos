var bajoPeso = 0;
var normal = 0;
var sobrePeso = 0;
var obesoI = 0;
var obesoII = 0;

var pesoBajo = 0;
var pesoNormal = 0;
var pesoSobrepeso = 0;
var pesoObesoI = 0;
var pesoObesoII = 0;

var imcUno = 0;
var imcDos = 0;
var imcTres = 0;
var imcCuatro = 0;
var imcCinco = 0;
var imc;

console.table(["BAJOPESO", "NORMAL", "SOBREPESO", "OBESOI", "OBESOII"]);

alert(
  "1: ingrese la cantidad de familiares 2: ingresar los datos necesarios 3: salir "
);

var familiares = parseInt(prompt("ingrese la cantidad de familiares"));

for (let i = 0; i < familiares; i++) {
  var edad = parseInt(prompt("ingrese la edad"));
  var altura = parseFloat(prompt("ingrese la altura en metros "));
  alert("pase 1");
  var peso = parseFloat(prompt("ingrese el peso"));
  alert("pase 2 a imc");
  imc = peso / (altura ** 2);
  alert("Su IMC es de: " + imc);

//  while (imc <= 0 || isNaN(imc)) {
   // imc = parseInt(prompt("ingrese un numero correcto "));
 // }
  if (imc <= 18.5) {
    alert("Y se encuentra en la categoria de: Bajo peso");
  } else if (imc >= 18.5 && imc <= 24.9) {
    alert("Y se encuentra en la categoria de: normal");
  } else if (imc >= 25.0 && imc <= 28.9) {
    alert("Y se encuentra en la categoria de: sobrepeso");
  } else if (imc >= 29.0 && imc <= 30.4) {
    alert("Y se encuentra en la categoria de: obeso 1");
  } else if (imc >= 35) {
    alert("Y se encuentra en la categoria de: obeso 2");
  }
}
//alert("el promedio de la masa corporal de la familia es" + imc.toFixed(1));
