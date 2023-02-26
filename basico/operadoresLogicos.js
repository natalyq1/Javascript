//operadores de comparacion

const ciudadDestino ='Bogota'
const ciudadesDisponibles = new Array('Lima', 'Bogota', 'Montevideo','Santiago')

//IF evalua una condicion
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){ //funciona tambien con > -1
    console.log(`Pasaje disponible para la venta`);
}//Pasaje disponible para la venta
else{
    console.log(`Ciudad no disponible para la venta`);
}

const valorPasaje = "1000"
if (valorPasaje == 1000) {//comparacion de datos
    console.log('EL pasaje vale 1000');
    
}
if (valorPasaje === 1000) {//compara el valor y tipo de dato, no sale nada porque uno es string y otro dato numerico
    console.log("No sirve");
}

//Operadores logicos and=&&, or= ||, not= ! no se cumple la condicion
let edadPasajero = 16
let estaAcompanado = false

console.log(`Verificar si eres mayor de edad o vas acompañado`);
if ((edadPasajero >=18 || estaAcompanado) && 
 (ciudadesDisponibles.indexOf(ciudadDestino))){ 
    console.log("Pasaje disponible para la venta");
} 
else {
    console.log("No eres apto para comprar el pasaje o ciudad no disponible");
}

//logica negativa
edadPasajero = 16
estaAcompanado = true
console.log('Usando logica negativa:');
if (!(edadPasajero >=18 || estaAcompanado) && 
 (ciudadesDisponibles.indexOf(ciudadDestino))){ 
    console.log("No eres apto para comprar el pasaje o ciudad no disponible");
} 
else {
    console.log("Pasaje disponible para la venta");
}
