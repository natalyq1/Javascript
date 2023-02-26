//ciclo desde un valor incial hasta el valor final
const datos = [
  {
    ciudad: "Bogota",
    precio: 500,
  },
  {
    ciudad: "Lima",
    precio: 400,
  },
  {
    ciudad: "Santiago",
    precio: 380,
  },
  {
    ciudad: "Montevideo",
    precio: 200,
  },
];

const presupuestoDisponible = 390;
let ciudadSeleccionada = "";

for (let index = 0; index < datos.length/* && ciudadSeleccionada == ''--esto en caso de no usar break*/ ; index++) {
  
  if (datos[index].precio <= presupuestoDisponible) {
    ciudadSeleccionada = datos[index].ciudad;
    break;
  }
}
if (ciudadSeleccionada == "") 
  console.log("No tenemos pasajes disponibles");
 else 
  console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);

