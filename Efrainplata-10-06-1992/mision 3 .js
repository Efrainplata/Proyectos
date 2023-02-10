/*Misión # 3

Misión3.txt

En el instituto TURBOCOEX, 
se tiene una  cantidad N 
de estudiantes, de los cuales se desea registrar el nombre,código y 
 nivel (Beginner, junior, senior), se debe verificar
  que no se creen códigos duplicados para los estudiantes que se
  registren. Además de los 
  datos solicitados se requiere registrar

 3 notas para cada estudiante. Se debe calcular y mostrar el promedio 
  de las notas por cada estudiante junto con un mensaje de "aprobó" o "reprobó"
   y el promedio general del grupo de estudiantes. Para saber si aprobó, su promedio 
   debe ser superior o igual a 3.5, (Validar las notas en un rango de 0 a 5). Se ha solicitado 
   que usted cree un algoritmo expresado en pseudocódigo que cumpla con los requerimientos indicados 
   creando un menú que permita realizar las siguientes acciones: 
   • Definir cantidad de estudiantes"

• Registrar datos estudiantes" 
Mostrar listado de estudiantes"

Registrar notas estudiantes" 
Imprimir notas estudiantes"

• Acerca del Autor"

• Salir"

#Programming */
 
  let estudiante = {
    nombre : "",
    codigo : "",
    nivel : "",
    nota1: [],
    nota2: [],
    nota3: [],
    promediototal:[]
  }
  
  
  let listaEstudiantes = []

  let promedio = 0;


  


  datos = parseInt(prompt("TURBOCOEX\n1 Definir cantidad de estudiantes\n2 Registrar datos estudiantes\n3 Registrar notas estudiantes\n4 lista de estudiantes\n5 salir "))
  
 do {
    if ( datos <=4 && datos > 0){
        switch (datos) {
    

   case 1:
  var estudiantesN=parseInt(prompt("ingresar cantidad estudiantes"))
   
    alert("CANTIDAD DE estudiantes ES " + estudiantesN)
  
 
        break;
        case 2:
          alert("bienvenido al Registro de estudiantes ")
          for(let i=0 ; i<estudiantesN ; i++){ 
         alert("ingresar datos de estudiantes")
          nombre =prompt("ingresa el nombre ")
          codigo =parseInt (prompt("id estudiantes"))


           nivel =prompt("nivel estudiante")
          estudiante.nombre = nombre;
          estudiante.codigo = codigo;
          estudiante.nivel = nivel;
          listaEstudiantes.push(estudiante);

          }
        break;
        case 3:
          alert("bienvenido al ingresos de notas ")

for (let i = 0; i < estudiantesN; i++) {
  estudiante.nota1[i] = parseFloat(prompt("ingresa las notas 1"+" del estudiante"+i))

  estudiante.nota2[i] = parseFloat(prompt("ingresa las notas 2"+" del estudiante"+i))

  estudiante.nota3[i] = parseFloat(prompt("ingresa las notas 3"+" del estudiante"+i))
  
 if (estudiante.nota1[i]<=5 && estudiante.nota1[i]> 0) {//validacion del rango de nota de 0 a 5 
   promedio += estudiante.nota1[i]

  } else {
    alert("la nota no se encuentra en el rango esperado 1 .")
  }
   if (estudiante.nota2[i]<=5 && estudiante.nota2[i]> 0) {
    promedio += estudiante.nota2[i]
  } else {
    alert("la nota no se encuentra en el rango esperado 2 .")
   }
    if (estudiante.nota3[i]<=5 && estudiante.nota3[i]> 0) {
      promedio += estudiante.nota3[i]
    } else {
      alert("la nota no se encuentra en el rango esperado 3.")
    }
 
  

  promedio = ((promedio/3)).toFixed(2)
  estudiante.promediototal.push(promedio)
  if (promedio >= 3.5) {
    alert("aprobo")
  } else {
   alert("reprobo")
 
  }
  
}

          
        break;
        
        case 4:
          for (let i = 0; i <listaEstudiantes.length; i++) {
           console.table(listaEstudiantes[i])
          }
          
         
              
          break;
          case 5:
            alert("salir")
    } 
  

 
   

    }
    else {
        alert("datos incorrectos")//primero mensaje de alerta
        datos = parseInt(prompt("Ingresa un número\n1 Definir cantidad de estudiantes\n2 Registrar datos estudiantes\n3 Registrar notas estudiantes\n4lista de estudiantes\n5salir"))
       
    }
    datos = parseInt(prompt("Ingresa un número\n1 Definir cantidad de estudiantes\n2 Registrar datos estudiantes\n3 Registrar notas estudiantes\n4 lista de estudiantes\n5salir"))
  
 } while (datos != 7);

















//  // arrays 
// // declarar arrays
// let array  = [1,2,3,4,5,6]
// // declarar arrays vacios
// let arrayvacio = []

// //Acceder a una posicion de array
// //nombre[indice de la posicion]
// console.log(array[1]);
// // cambiar valor de una posicion de array
// array[0] = 2
// console.log(array[0]);

// //enviar informacion al array o lleganar de un dato
// //nombrearray.push(Valores a enviar)

// array.push(10)
// //se agrego el valor 10 al final del array 
// console.log(array);


// //saber longitud de un array o cantidad de elementos dentro del array

// console.log(array.length)

// //sacar el ultimo elemento del array 
// //nombrearray.pop()
// array.pop()
// //sacamos un elemento y se actualiza el largo
// console.log(array.length)
// console.log(array)

// sumatoriaElementosArray = 0
// for(let i = 0 ; i< array.length ; i++ ){
//  sumatoriaElementosArray += array[i] // sumar todos los elementos del array
//   array[i] = 5// cambiar todos los valores del array a 5
// }
// console.log(array)


// //ingrese n valores en un array

// n=5
// arraynuevo = []

// for(let i = 0 ; i< 5; i++ ){

//     nombreestudiante = "jorge" //prompt("dame el nombre del estudiante")

//     arraynuevo.push(nombreestudiante)
//  }

//  console.log(arraynuevo)



