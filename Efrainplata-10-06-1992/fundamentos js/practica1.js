//Imprimir números aleatorios en el rango de 1 a 10 mientras el número no sea igual a cero
var i=1
while (i<10){
let random = Math.random()*(10)+1;
random = Math.floor(random)
console.log(random);
i++
};
//Imprimir 5 números aleatorios en el rango de 1 a 100.
 var i=1
 while (i<100) {
    let random = Math.random ()*(5)+1;
    random = Math.floor(random)
    console.log(random)
    i++
 };
//Un individuo desea invertir su capital en un banco y desea saber cuánto dinero ganará después de un mes si el banco paga a razón de 1,2% mensual.
var capital = prompt("Ingrse su capital");
const interes = 0.012
 var ganancia = capital * interes
 alert("Su ganancia es "+ganancia)

//Calcule el área del triángulo y muestre su resultado.
var base = prompt("Ingrese el base del triángulo")
var altura = prompt("Ingrese el altura del triángulo")

const area = base * altura/2;

alert("Su area es " + area)


//Una agencia de venta de autos paga a su personal de ventas un salario de $980.000,
//más una comisión de $170.000 por auto vendido, más un 5% del valor de venta. Diseñar 
//un algoritmo para calcular el salario de un vendedor en un determinado mes, conociendo 
//el nº de automóviles vendidos y el total del monto de ventas.
 var salario = parseInt(prompt("ingrese su salario"))
 var comision = parseInt(prompt("ingrese su comision"))
 var cantidad = parseInt(prompt("ingrese su cantidad"))
 const porcentajeC = 0.05
 const valorCar = 1000000
 totalVendidos = cantidad*valorCar
 comisionventas = totalVendidos*porcentajeC
 salario = salario+ comision+ comisionventas
 alert("Su salario es " + salario )
 alert("valor total de ventas" +totalVendidos )
 //Hallar el promedio de calificaciones, teniendo en cuenta que el estudiante tiene 4 notas decimales;
 //dos notas valen el 40% y las otras dos valen el 60%.