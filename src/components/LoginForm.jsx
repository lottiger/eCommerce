import { useFormik } from 'formik'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validate = values => {
  const errors = {};
  
  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (!passwordRegex.test(values.password)) {
    errors.password = 'Password needs to contain ex. Aa!1 and be at least 8 characters long';
  }
  return errors;
}

export const LoginForm = () => {
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: '',
  }
  const form = useFormik ({
    initialValues,
    validate,
    onSubmit: async (values) => {
      console.log(values)

      const {error, success} = await login(values.email, values.password)

      if(error) {
        setError (error)
        console.log(error)
      } else if (success) {
        setSuccess(success)
        navigate ('/private')
      }
    }
  })

  return (
    <form onSubmit={form.handleSubmit} noValidate>
      <div>
        <label htmlFor="email">Email</label>
        <input id='email' type="email" {...form.getFieldProps('email')} className="border block w-full rounded" />
        {form.touched.email && form.errors.email ? (
          <div className='text-xs text-red-600'>{form.errors.email}</div>
        ) : null}

        <label htmlFor="password">Password</label>
        <input id='password' type="password" {...form.getFieldProps('password')} className="border block w-full rounded" />
        {form.touched.password && form.errors.password ? (
          <div className='text-xs text-red-600'>{form.errors.password}</div>
        ) : null}
      </div>
      {error && <p className="text-red-600 text-xs">{error}</p>}
      <button className='bg-blue-950 text-white mt-2 border block w-full p-1 rounded hover:bg-blue-900' type='submit'>Login</button>
    </form>
  )
}



// // import { useFormik } from 'formik'
// // import { useAuth } from '../context/AuthContext'
// // import { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import validate from './Validate'; // import validate function if you want to use it

// // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// //   const validate = values => {
// //     const errors = {};

// //     if (!values.email) {
// //       errors.email = 'Required';
// //     } else if (!emailRegex.test(values.email)) {
// //       errors.email = 'Invalid email address';
// //     }
// //     if (!values.password) {
// //       errors.password = 'Required';
// //     } else if (!passwordRegex.test(values.password)) {
// //       errors.password = 'Password needs to contain ex. Aa!1 and be at least 8 characters long';
  
// //   }
// //   return errors;
// // }



// export const LoginForm = () => {
//   const { login, token } = useAuth()
//   const [error, setError] = useState('')
//   const [success, setSuccess] = useState('')
//   const navigate = useNavigate()

//   const initialValues = {
//     email: '',
//     password: '',
//   }
//   const form = useFormik ({
//     initialValues,
//     validate,
//     onSubmit: async (values) => {
//       console.log(values)

//       const {error, success} = await login(values.email, values.password)

//       if(error) {
//         setError (error)
//         console.log(error)
//       } else if (success) {
//         setSuccess(success)
//         navigate ('/private')
//       }
//     }
//   })

//   return (
//     <form onSubmit={form.handleSubmit} noValidate>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input id='email' type="email" {...form.getFieldProps('email')} className="border block w-full rounded" />
//         {form.touched.email && form.errors.email ? (
//           <div className='text-xs text-red-600'>{form.errors.email}</div>
//         ) : null}

//         <label htmlFor="password">Password</label>
//         <input id='password' type="password" {...form.getFieldProps('password')} className="border block w-full rounded" />
//         {form.touched.password && form.errors.password ? (
//           <div className='text-xs text-red-600'>{form.errors.password}</div>
//         ) : null}
//       </div>
//       {error && <p className="text-red-600 text-xs">{error}</p>}
//       <button className='bg-blue-950 text-white mt-2 border block w-full p-1 rounded hover:bg-blue-900' type='submit'>Login</button>
//     </form>
//   )
// }



