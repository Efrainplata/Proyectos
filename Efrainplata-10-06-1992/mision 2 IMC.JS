//MISIÓN #2

/*Muchos son los cambios que promueven la pandemia generada por el COVID-19 
y sus variantes; por mencionar algunos: la alimentación, el control del peso, entre otros.
Leidy se encuentra preocupada por la salud de su familia, y encuentra un artículo para llevar un control sobre el peso, conocido como
"indice de masa corporal" (IMC) para adultos de 20 años o más. El IMC permite establecer una clasificación al relacionar la estatura
en metros con el peso en kilogramos; la relación esta determinada por el peso (kg) / estatura (mts) elevada a la 2, que determina un índice
y a su vez el nivel de peso (bajo peso, normal, sobrepeso y obeso).

IMC

Nivel de peso

Por debajo de 18.5: Bajo peso

18.5 24.9: Normal

25.0 28.9 Sobrepeso

29.034.9 Obeso I

35.0 o más :Obeso II

Planteamiento de la misión

Con respecto a la situación planteada,
 ¿De qué manera crees que Leidy puede automatizar el control del nivel
  de peso para sus familiares con base al IMC?, considerando que la frecuencia y cantidad
   de integrantes del grupo familiar son numerosos, demandando mucho tiempo para realizar los cálculos de forma manual,
    y la alta probabilidad de equivocarse; entonces, Leidy decide diseñar un algoritmo, que simplifique el tiempo empleado, 
    minimice la probabilidad de error humano al realizar las operaciones y controle con el registro del nombre y parentesco a cada uno de sus familiares.

</> Analizar, identificar y declarar las variables que considere necesarias para realizar los cálculos del IMC y los estados relacionados con el nivel de peso.

<> Determinar desde las variables identificadas, cual(es) corresponden a los datos de entrada, las operaciones
 entre ellas que dan solución al reto, y cual (es) son los datos para presentar como salida. 
 </>Diseñar el algoritmo que implemente la navegación a través de un menú con las siguientes opciones: 
 Ingresar familiares, ingresar datos necesarios para realizar los cálculos, mostrar resultados, salir.*/








//IMC
 //informacion
 

// Nivel de peso

 //Por debajo de 18.5: Bajo peso
 
 //18.5 24.9: Normal
 
 //25.0 28.9 Sobrepeso
 
 //29.034.9 Obeso I
 
 // 35.0 o más :Obeso II




//parentesco 


console.table(['bajopeso', 'normal', 'sobrepeso', 'obesoI', 'ObesoII'])





//menu 

var datos =parseInt(prompt("Ingresa un número\n1 Ingresar familiares\n2 Datos necesarios para mostra los calculos \n3 Mostrar resultados\n4 Salir"))
do {
    if (datos <=4 && datos <=1) {
        switch (datos) {
           
            case 1:

            var familiares=prompt("Ingresar familiares")
                var edad = parseInt(prompt("ingrese la edad"));
                 var altura = parseFloat(prompt("ingrese la altura en metros "));


                
                
                break;
        
            case 2:
                var datos = parseInt(prompt("Datos necesarios para mostra los calculos"))
                var peso = parseFloat(prompt("ingrese el peso"));
             
              
                break;


                case 3:


                for (var i = 0; i <familiares; i++){
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


                alert("mostrar resultados"+imc)
                imc = peso / (altura ** 2);
                alert("Su IMC es de: " + imc);
                
            

                break;
        }
    
    
    } else {
        prompt("los numeros no estan en el rango ")
        var datos =parseInt(prompt("Ingresa un número\n1 Ingresar familiares\n2 Datos necesarios para mostra los calculos \n3 Mostrar resultados\n4 Salir"))
    }
   
    var datos =parseInt(prompt("Ingresa un número\n1 Ingresar familiares\n2 Datos necesarios para mostra los calculos \n3 Mostrar resultados\n4 Salir"))
    }
 while (dato !=4);












    













    
    
    




