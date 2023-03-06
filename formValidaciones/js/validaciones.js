export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
console.log(input.parentElement);
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML = ''
    }else{
        input.parentElement.classList.add('input-container--invalid')
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError( tipoDeInput,input)
    }
}

const tipoDeErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensajesDeError = {
    nombre: {
        valueMissing:'El campo nombre no puede estar vacio'
    },
    email: {
        valueMissing:'El campo correo no puede estar vacio',
        typeMismatch: 'El correo no es válido'
    },
    password: {
        valueMissing:'El campo contraseña no puede estar vacio',
        patternMismatch: 'Debe contener min. 6 max.12 caracteres, una mayuscula, una minuscula, un numero y no debe contener caracteres especiales'
    },
    nacimiento: {
        valueMissing:'El campo fecha de nacimiento no puede estar vacio',
        customError: 'Debes tener al menos 18 años de edad'
    },
    numero: {
        valueMissing:'El campo numero no puede estar vacio',
        patternMismatch: 'El formato requerido es de 10 digitos'
    },
    direccion: {
        valueMissing:'El campo direccion no puede estar vacio',
        patternMismatch: 'El formato requerido es de 10 a 40 caracteres'
    },
    ciudad: {
        valueMissing:'El campo ciudad no puede estar vacio',
        patternMismatch: 'El formato requerido es de 3 a 30 caracteres'
    },
    estado: {
        valueMissing:'El campo estado no puede estar vacio',
        patternMismatch: 'El formato requerido es de 3 a 30 caracteres'
    }
}

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = ''
    tipoDeErrores.forEach( error => {
        if (input.validity[error]) {
            mensaje =mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje
}

function validarNacimiento(input) {
    const fechaCliente = new Date (input.value)
    let mensaje = ''
    
    if (!mayorDeEdad(fechaCliente)) {
        mensaje ='Debes tener al menos 18 años de edad'
    }

    input.setCustomValidity(mensaje)
}
function mayorDeEdad(fecha) {
    const fechaActual = new Date()
    const diferenciaFechas= new Date(
        fecha.getUTCFullYear() +18, 
        fecha.getUTCFullMonth(), 
        fecha.getUTCFullDate()
        )
    return diferenciaFechas <= fechaActual;
}