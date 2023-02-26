/*var num1= parseInt(prompt("Ingrese un numero"))
var num2= parseInt(prompt("Ingrese otro numero"))
suma=(num1+num2)
resta=(num1-num2)
multiplicacion=(num1*num2)
division=(num1/num2)
console.log("La suma es: "+suma +", la resta: "+resta +" , la multiplicacion es: "+ multiplicacion +", la division es: "+division)

var nombre="Nataly"
var apellido="Quiroga"
var zodiaco="Tauro"
var totalTexto= nombre+" "+ apellido+" "+ zodiaco
console.log(totalTexto+ ", el largo es: "+totalTexto.length)

var color=prompt("¿Cual es tu color favorito?")
console.log(color.toUpperCase());

console.log("hola");
*/
//listas
const ciudades = new Array("Lima, Bogota, Montevideo")
console.log(ciudades);

const paises = ["Colombia, Ecuador , Chile"]
console.log(paises);


    ciudades.push("Santiago")
    paises.push("Cuba")
    paises.unshift("Peru")
    console.log(ciudades);
    console.log(paises);
//[ 'Peru', 'Colombia, Ecuador , Chile', 'Cuba' ]
    console.log(paises[2]);


    //esta es para quitar y reemplazar por otro elemento
    paises.splice(1,0,"Venezuela")
    console.log(paises);
    //[ 'Peru', 'Venezuela', 'Colombia, Ecuador , Chile', 'Cuba' ]
    console.log(paises.length);
    console.log(`Tenemos ${ciudades.length} ciudades`);
    console.log(ciudades);
    //Tenemos 2 ciudades [ 'Lima, Bogota, Montevideo', 'Santiago' ]


    //quitar al final o quitar del inicio
    const lugares = new Array("museos", "palacios", "bares", "peluqueria", "drogueria", "museos", "palacios", "bares", "peluqueria", "drogueria")
    console.log(lugares);
    lugares.pop()
    console.log(lugares);
    lugares.shift()
    console.log(lugares);

    //busca el elemento que coincida a mi busqueda
    console.log( lugares.filter((e) => e == "bares"));//[ 'bares' ]
    console.log( lugares.filter((e) => e.length > 5));//[ 'bares' ]

    //convertir lista en cadena de caracteres
    console.log(lugares.join("-"));
    //palacios-bares-peluqueria-drogueria-museos-palacios-bares-peluqueria

//ordenar lista
console.log(lugares.sort());
//['bares', 'bares','drogueria','museos','palacios','palacios','peluqueria','peluqueria']

//posicion de un elemento
console.log(`museos esta en la posicion ${lugares.indexOf('museos')}`);
//museos esta en la posicion 3

//unificando listas
const listaPaisesCiudades = paises.concat(ciudades)
console.log(listaPaisesCiudades);
