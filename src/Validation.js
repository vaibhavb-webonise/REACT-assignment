export const validation = (values) => {
  let errors = { name: "", contact: "", place: "" };

  if (!values.name) {
    errors.name = "Name is required";
    console.log("values name in if 1");
  }
  if (!values.place) {
    errors.place = "Place is required";
    console.log("values name in if 2");
  }
  if (!values.contact) {
    errors.contact = "Contact is required";
    console.log("values name in if 3");
  } else {
    if (values.contact.length !== 10 || !/^[0-9]+$/.test(values.contact)) {
      errors.contact = "please provide valid mobile number";
      console.log("values name in else 1");
    }
    if (values.name.length < 2 || !/^[a-zA-z ]+/.test(values.name)) {
      errors.name = "please provide the valid name";
      console.log("values name in else 3");
    }
    if (values.place.length < 2 || !/^[a-zA-Z ]+/.test(values.place)) {
      errors.place = "please enter the valid place";
      console.log("this is running of else in place");
    }
  }
  console.log("validation object ===========>", errors);
  return errors;
};
