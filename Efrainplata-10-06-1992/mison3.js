datos = parseInt(prompt("Ingresa un número\n1 Definir cantidad de estudiantes\n2 Registrar datos estudiantes\n3 Registrar notas estudiantes\n4 Salir"))
  
do {
   if ( datos <=7 && datos > 0){
       switch (datos) {
   

  case 1:
   var estudiantesN=parseInt("ingresar estudiantes")
   alert("cantidad de estudiantes registrada con exito")
       break;


       
       case 2:
       var datosdeEstudiantes = parseInt("ingresar datos de estudiantes")
       var nombre =prompt("ingresa el nombre ")
       var id =parseInt (prompt("id estudiantes"))
       var nivel =prompt("nivel estudiante")
       
       break;
       case 3:
           alert("3")
       break;
       case 4:
           alert("4")
       break;
       case 5:
           alert("5")
       break;
       case 6:
           const datospersonales = {
               nombre : ""
           }
       break;
   } 
   
       
   }
   else {
       alert("datos incorrectos")//primero mensaje de alerta
       datos = parseInt(prompt("Ingresa un número\n1 Definir cantidad de estudiantes\n2 Registrar datos estudiantes\n3 Registrar notas estudiantes\n4 Salir"))
      
   }
   datos = parseInt(prompt("Ingresa un número\n1 Definir cantidad de estudiantes\n2 Registrar datos estudiantes\n3 Registrar notas estudiantes\n4 Salir"))

} while (datos != 7);
