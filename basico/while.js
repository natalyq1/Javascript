const ciudadesDisponibles = new Array('Lima', 'Bogota', 'Montevideo','Santiago')

const precioCiudad = new Array(500, 400 ,380 ,200)
presupuestoDisponible = 320

//while se repite 0 o mas veces
let i = 0
while (precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length) {
    i++;
}if (i == ciudadesDisponibles.length) {
    console.log('No tenemos pasajes disponibles');
}else{
console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);}