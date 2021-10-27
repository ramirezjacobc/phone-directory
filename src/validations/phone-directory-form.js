export default function validations(values) {
  let errors = {};
  const phone_regex = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$");

  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 3 || values.name.length > 25) {
    errors.name = "Name must be greater than 3 and less than 25 characters";
  }

  if (!values.phone_number || !phone_regex.test(values.phone_number)) {
    errors.phone_number = "Provide a valid phone number";
  }

  return errors;
}
