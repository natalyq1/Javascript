const ciudadDestino ='Lima'
const ciudadesDisponibles = new Array('Lima', 'Bogota', 'Montevideo','Santiago')

let edadPasajero = 16
let estaAcompanado = false

console.log(`Verificando pasajes para ${ciudadDestino}`);
console.log(`Verificando si eres mayor de edad o vas acompañado`);
if (edadPasajero >=18 || estaAcompanado){
    if(ciudadesDisponibles.indexOf(ciudadDestino)){ 
        console.log("Pasaje disponible para la venta");
    } 
    else {
        console.log("No eres apto para comprar el pasaje o ciudad no disponible");
    }
} else{
    if (edadPasajero >=16 && ciudadDestino == 'Lima'){
        console.log("Pasaje disponible para la venta hacia Lima"); 
    }else{
    console.log("El pasajero no cumple las reglas");
    }
}
 