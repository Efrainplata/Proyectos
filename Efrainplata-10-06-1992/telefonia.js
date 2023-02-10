//diseñar un algoritmo con diagrama de flujo de datos y pseudocodigo 
//que permita registrar un inventario de celulares de las siguientes marcar :
//samsumg,iphone,xiaomi,motorola huawei,oppo el algorimo debe permitir el algorimo
// debe permitir descontar del inventario los equipos vendidos segun su marca y actualizar
 // la cantidad de telefonos disponibles , a demas debe de calcular el total de dinero recaudado por las ventas 


 var n = parseInt(prompt("ingresa  0 para no hacer nada \n para hacer la venta registra la venta 1 "))

 //inventario

 var Casamsumg = parseInt(prompt("cantidad de disponible Samsumg"))
 var Caiphone = parseInt(prompt("cantidad de disponible Iphone"))
 var Caxiaomi = parseInt (prompt("cantidad de disponible Xiaomi,"))
 var Camotorola =parseInt(prompt("cantidad de disponible Motorola"))
 var Cahuawei=parseInt(prompt("cantidad de disponible Huawei"))
 var Caoppo=parseInt(prompt("cantidad de disponible Oppo "))


 var samsumg =100
 var phones= 200
 var xiaomi= 400
 var motorola= 500
 var huawei = 600
 var oppo = 700

 var sa=0,ph=0,xi=0,mt=0,hu=0,op=0;
 var vcanti=0;

//presios
var Psamsumg=300000
var Pphones=1000000
var Pxiaomi=2000000
var Pmotorola = 500000
var Phuawei = 800000
var Popp= 600000







 
 //referencia 

 while (n==1){
    var ref = (prompt("ingrese la marca de telefono a comprar :  \nsamsumg\nphones\nxiaomi\nmotorola\nhuawei\noppo"));
    
    switch (ref){
        case 'samsumg':
     var vcati=parseInt(prompt("ingrese la cantidad "))
        sa=sa-vcanti
        sa+sa-vcanti
        vcanti*Psamsumg
        alert("precio"+Psamsumg)
        
        
        

        break

        case 'phones':
     var vcati=parseInt(prompt("ingrese la cantidad "))
        ph=ph-vcanti
        ph+=ph-vcanti
        vcanti*Pphones
        alert("precio"+Pphones)

        break

        case 'xiaomi':
     var vcati=parseInt(prompt("ingrese la cantidad "))

     xi=xi-vcanti
     xi+xi-vcanti

     vcanti*Pxiaomi
     alert("precio"+Pxiaomi)
        break

        case 'motorola':
     var vcati=parseInt(prompt("ingrese la cantidad "))
     mt=mt-vcati
     mt+mt-vcati
     vcanti*Pmotorola

     alert("precio"+Pmotorola)
        break

        case 'huawei':
     var vcati=parseInt(prompt("ingrese la cantidad "))
     hu=hu-vcati
     hu+hu-vcati
     vcanti*Phuawei
     alert("precio"+Phuawei)

        break
    
        case 'oppo':
            var vcati=parseInt(prompt("ingrese la cantidad "))
              
            op=op-vcati
            op+op-vcati
            vcanti*Popp
            alert("precio"+Popp)
            break 
    
    }
    
    
 }
 alert("sa"+"ph"+"xi"+"mt"+"hu"+"op")   

 


 

