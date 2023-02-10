// Fundamentos de Js
// 0. Imprimir en consola
console.log("Hola mundo");
console.log(2+2);
console.log(2-2);
console.log("Hola mundo"+5);
//solicitar datos al usuario
// 1. Variables y constantes

//declaracion de constantes
const nombre = "Juan";
const apellido = "Perez";
nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);
nombreCompleto = `${nombre} ${apellido}`; //interpolacion 
console.log(nombreCompleto);

//declaracion de variables
var nombre2 = "Juan";
var apellido2 = "Perez";
let nombre3 = "Mauricio";
let apellido3 = "Herrera";
nombreCompleto2 = nombre2 + " " + apellido2;
nombreCompleto3 = `${nombre3} ${apellido3}`; //interpolacion
console.log(nombreCompleto2);
console.log(nombreCompleto3);


// 2. Tipos de datos
var numerito //undefined
numerito = numerito+ 3; //number
 var nombre4 = "Juan"; //string
    var edad = 30 //number
    edad = edad + "hola"; 
    var sueldo = 30.5; //number
    var hijos = false; //boolean
    var cedula = "1234567890"; //string
    console.log( edad);
    console.log(typeof numerito);
    console.log(typeof edad);



// 3. Operadores

    //aritmeticos

    var suma = 1 + 2;
    var resta = 1 - 2;
    var multiplicacion = 1 * 2;
    var division = 1 / 2;
    var modulo = 1 % 2;
    var exponencial = 1 ** 2;
     //incremento y decremento
     var numero = 1;
     numero = numero + 1;
     numero += 1;
     numero++;
     numero--;
     numero -= 1;
     numero = numero - 1;

    //relacionales o de comparacion

    var mayorQue = 1 > 2;
    var menorQue = 1 < 2;
    var mayorIgualQue = 1 >= 2;
    var menorIgualQue = 1 <= 2;
    var igualQue = 1 == "1"; //compara valor
    console.log(igualQue)
    var igualQue2 = 1 === "1"; //compara valor y tipo de dato
    console.log(igualQue2)
    var diferenteQue = 1 != 2; //compara si son diferentes
    var diferenteQue2 = 1 !== 2; //compara si son diferentes y si son de diferente tipo de dato
   
    //logicos
    var and = true && true;
    var or = true || false;
    var not = !true;
    console.log(not)

// 4. Condicionales

    //if
    var numero = 1
    if(numero == 1){
        if (typeof numero == "string") {
            console.log("Soy un string");
        }
        else{ console.log("solo soy un uno");
    }
    }else if(numero === 2){
    }else if(numero === 3){
        console.log("Soy tres");
    }else if(numero === 4){
        console.log("Soy cuatro");
    }else if(numero === 5){
        console.log("Soy cinco");
    }else if(numero === 6){
        console.log("Soy seis");
    }else{
        console.log("no cumplo ninguna condicion")
    }

    //switch
    var numeroS= 10;
    switch(numeroS){
        case 1:
        case 3:
            case 5:
            console.log("impar");
            break;
        case 2:
            console.log("par");
            break;
            case 4:
            case 6:
                console.log("par mayor a 2")
                break;
        default:
            console.log("No soy nada");
            break;
    }

    // 5. Ciclos



    //for
    for(var i = 0; i < 10; i++){
        console.log(i);
    }

    //while
    var i = 1;
    while(i < 10){
        console.log(i);
        i++;
    }

    //do while
    var i = 10;
    do{
        console.log(i);
        i++;
    }
    while(i < 10);

    //arrays 
    var arreglo = [1,2,3,4,5,6,7,8,9,10]; //sus datos se separan por comas, y pueden ser cualquier tipo de dato
    console.log( arreglo[0]) 
    console.log(typeof arreglo)
    for(var i = 0; i < arreglo.length; i++){
        console.log(arreglo[i]);
    }
    // agregar un elemento al final del arreglo
    arreglo.push(true);
    console.log(arreglo);
    // eliminar el ultimo elemento del arreglo
    arreglo.pop();
    console.log(arreglo);
    // eliminar el primer elemento del arreglo
    arreglo.shift();
    console.log(arreglo);
    // agregar un elemento al inicio del arreglo
    arreglo.unshift(5);
    console.log(arreglo);
    // eliminar un elemento en una posicion especifica
    arreglo.splice(2,3);
    console.log(arreglo);
    // agregar un elemento en una posicion especifica
    arreglo.splice(0,0,1,2,3,"hola");
    console.log(arreglo);
    // buscar un elemento en el arreglo
    var indice = arreglo.indexOf(5);
    console.log(indice);
    // copiar un arreglo
    var copiaArreglo = arreglo.slice();
    console.log(copiaArreglo);
    // ordenar un arreglo
    var arreglo2 = [1,2,3,4,5,6,7,8,9,10];
    arreglo2.reverse();
    console.log(arreglo2);
