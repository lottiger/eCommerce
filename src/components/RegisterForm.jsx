
import { useFormik } from 'formik'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import validate from './Validate'
import { useNavigate } from 'react-router-dom'


export const RegisterForm = () => {
  const { register } = useAuth()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const initialValues = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
   

  const form = useFormik ({
    initialValues,
    validate,
    onSubmit: async (values) => {
     
      
      console.log(values)
    
      try{
      const {error, success} = await register(values.email, values.password) 
      
      if(error) {
        setError (error)
        setSuccess('')
        console.log(error)

      } else if (success) {
            setSuccess(success)
            setError('')
            form.resetForm()
            navigate ('/auth/login')
            // localStorage.setItem(firstname, values.firstname)
          
        }
    } catch(error) {
      console.log(error)
    }
  }
  })

    return (
      <form onSubmit={form.handleSubmit} noValidate>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input id='firstname' type="text" {...form.getFieldProps('firstname')} className="border block w-full mt-3 rounded" />
        {form.touched.firstname && form.errors.firstname ? (
          <div className='text-xs text-red-600' >{form.errors.firstname}</div>
        ) : null}
      </div>
      <div>
      <label htmlFor="lastname">Last Name</label>
      <input id='lastname' type="text" {...form.getFieldProps('lastname')} className="border block w-full mt-3 rounded" />
      {form.touched.lastname && form.errors.lastname ? (
          <div className='text-xs text-red-600'>{form.errors.lastname}</div>
        ) : null}    
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id='email' type="email" {...form.getFieldProps('email')} className="border block w-full mt-3 rounded" />
        {form.touched.email && form.errors.email ? (
          <div className='text-xs text-red-600' >{form.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id='password' type="password" {...form.getFieldProps('password')} className="border block w-full mt-3 rounded" />
        {form.touched.password && form.errors.password ? (
          <div className='text-xs text-red-600' >{form.errors.password}</div>
        ) : null}
      </div>
      <div>
      <label htmlFor="confirmPassword">Confirm Password</label>
       <input id='confirmPassword' type="password" {...form.getFieldProps('confirmPassword')} className="border block w-full mt-3 rounded" />
       {form.touched.confirmPassword && form.errors.confirmPassword ? (
          <div className='text-xs text-red-600'>{form.errors.confirmPassword}</div>
        ) : null}
      </div>

      {error && <p className="text-red-600 text-xs">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    
      <button className='bg-blue-950 text-white mt-2 border block w-full p-1 rounded hover:bg-blue-900' type='submit'>Register</button>
    </form>
  );
}




