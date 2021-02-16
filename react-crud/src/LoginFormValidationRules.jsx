export default function validate(values) {
    let errors = {};
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
   if (!values.lname){
      errors.lname = "Last name is required"
    }else if(!values.lname.length > 1){
      errors.lname = "Last name cannot be empty!"
    }
    if (!values.fname){
      errors.fname = "First name is required"
    }else if(!values.fname.length > 1){
      errors.fname = "First name cannot be empty!"
    }
    return errors;
  }
  