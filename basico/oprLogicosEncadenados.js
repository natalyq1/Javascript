const ciudadDestino ='Bogota'
const ciudadesDisponibles = new Array('Lima', 'Bogota', 'Montevideo','Santiago')

let edadPasajero = 20
let estaAcompanado = false
let tienePasaporte = true
let estaCasado = false

console.log(`Verificando pasajes para ${ciudadDestino}`);

//A && B || C
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 && 
edadPasajero >= 18 && 
tienePasaporte &&
!estaCasado) {
    console.log('Pasaje disponible');
    console.log('Paquete disponible para solteros');
} else {
    console.log('No es apto');
}
 