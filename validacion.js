export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    };

    if(input.validity.valid) {
        input.parentElement.classList.remove("formcontato__input--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("formcontato__input--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    };
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio.",
        patternMismatch: "Máximo 50 caracteres."
    },
    email: {
        valueMissing: "El campo email no puede estar vacio.",
        typeMismatch: "El correo no es válido."
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacio.",
        patternMismatch: "Máximo 50 caracteres."
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacio.",
        patternMismatch: "Máximo 300 caracteres."
    }
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";

    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
};

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};