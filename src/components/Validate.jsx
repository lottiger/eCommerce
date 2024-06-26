const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


const validate = values => {
  const errors = {}

 

  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length < 2) {
    errors.firstName = 'First name have to be at least 2 characters long'
  }
    if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Last name have to be at least 2 characters long'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (!passwordRegex.test(values.password)) {
    errors.password = 'Password needs to contain ex. Aa!1 and be at least 8 characters long'
  }
  
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required'
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return errors
}

export default validate