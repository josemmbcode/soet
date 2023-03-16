function isValidNumber(value) {
  return value && value.length >= 10 && !isNaN(value);
}

function isValidText(value) {
  return value && value.trim().length > 0;
}
export function validateInput(input) {
  let errors = {};

  if (!isValidNumber(input.contacto)) {
    errors.contacto = "Numero de telefono invalido.";
  }
  if (!isValidText(input.nombre)) {
    errors.nombre = "El nombre no puede estar vacio.";
  }

  if (!isValidText(input.apellido)) {
    errors.apellido = "El apellido no puede estar vacio.";
  }

  if (input.entrega === "delivery") {
    if (!isValidText(input.direccion)) {
      errors.direccion = "La direccion no puede estar vacia.";
    }
    if (!isValidText(input.Referencia)) {
      errors.Referencia = "El punto de referencia no puede estar vacio.";
    }
    if (!isValidText(input.sector)) {
      errors.Referencia = "El sector no puede estar vacio.";
    }
  }

  if (Object.keys(errors).length > 0) {
    throw errors;
  }
}

function isValidEmail(value) {
  return value && value.includes("@");
}

function isValidPassword(value) {
  return value && value.trim().length >= 7;
}

export function validateCredentials(input) {
  let validationErrors = {};

  if (!isValidEmail(input.email)) {
    validationErrors.email = "Correo invalido.";
  }

  if (!isValidPassword(input.password)) {
    validationErrors.password = "Clave Invalida.";
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
}
