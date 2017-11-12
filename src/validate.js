const validate = values => {
  const errors = {};

  if (!values.asereje) {
    errors.asereje = 'Requerido';
  }

  if (!values.matematica1) {
    errors.matematica1 = 'Requerido';
  }
  if (!values.intro) {
    errors.intro = 'Requerido';
  }
  if (!values.firstName) {
    errors.firstName = 'Requerido';
  }
  if (!values.lastName) {
    errors.lastName = 'Requerido';
  }
  if (!values.email) {
    errors.email = 'Requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Dirección de email invalida';
  }
  if (!values.sex) {
    errors.sex = 'Requerido';
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Requerido';
  }
  return errors;
};

export default validate;
