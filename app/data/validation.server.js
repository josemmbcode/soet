function isValidNumber(value) {
  return value && value.length >= 10 && !isNaN(value);
}

function isValidName(value) {
  return value && value.trim().length > 0;
}
export function validateInput(input) {
  let errors = {};

  if (!isValidNumber(input.contacto)) {
    errors.contacto = "Numero de telefono invalido.";
  }
  if (!isValidName(input.nombre)) {
    errors.nombre = "El nombre no puede estar vacio.";
  }

  if (!isValidName(input.apellido)) {
    errors.apellido = "El apellido no puede estar vacio.";
  }
  if (Object.keys(errors).length > 0) {
    throw errors;
  }
}
