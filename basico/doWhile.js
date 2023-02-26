
const datos =[
{
    'ciudad':'Bogota',
    'precio' : 500
},{
    'ciudad':'Lima',
    'precio' : 400
},
{
    'ciudad':'Santiago',
    'precio' : 380
},
{
    'ciudad':'Montevideo',
    'precio' : 200
}
]
const presupuestoDisponible = 400

// do while se repite 1 o mas veces
let i = 0
/*while (i < datos.length && datos[i].precio > presupuestoDisponible) {
    i++;
}*/
let ciudadSeleccionada = ''
do{
    if(datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad
        break
}i++;
}while (i <datos.length && ciudadSeleccionada == '') {
    if (i == datos.length) {
    console.log('No tenemos pasajes disponibles');
}else{
console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);}
}
