export const validation = (values) => {
  let errors = { name: '', contact: '', place: '' };

  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.place) {
    errors.place = 'Place is required';
  }
  if (!values.contact) {
    errors.contact = 'Contact is required';
  } else {
    if (values.contact.length !== 10 || !/^[0-9]+$/.test(values.contact)) {
      errors.contact = 'please provide valid mobile number';
    }
    if (values.name.length < 2 || !/^[a-zA-z ]+/.test(values.name)) {
      errors.name = 'please provide the valid name';
    }
    if (values.place.length < 2 || !/^[a-zA-Z ]+/.test(values.place)) {
      errors.place = 'please enter the valid place';
    }
  }
  return errors;
};
