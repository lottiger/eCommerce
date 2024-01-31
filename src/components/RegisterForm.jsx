import { useFormik } from 'formik'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

export const RegisterForm = () => {
  const { register } = useAuth()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

  const form = useFormik ({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: async (values) => {
      console.log(values)
      const {error, success} = await register(values.email, values.password) 
      
      if(error) {
        setError (error)
        console.log(error)
      } else if (success) {
            setSuccess(success)
            // localStorage.setItem(firstname, values.firstname)
          
        }
    }
  })

    return (
    <form onSubmit={form.handleSubmit}>
        <div>
            <label htmlFor="firstname">First Name</label>
            <input id='firstname' type="text" value={form.values.firstname} onChange={form.handleChange} className="border block w-full" />
            
            <label htmlFor="lastname">Last Name</label>
            <input id='lastname' type="text" value={form.values.lastname} onChange={form.handleChange} className="border block w-full" />
            
            <label htmlFor="email">Email</label>
            <input id='email' type="email" value={form.values.email} onChange={form.handleChange} className="border block w-full" />

            <label htmlFor="password">Password</label>
            <input id='password' type="password" value={form.values.password} onChange={form.handleChange} className="border block w-full" />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id='confirmPassword' type="password" value={form.values.confirmPassword} onChange={form.handleChange} className="border block w-full" />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <button className='' type='submit'>Register</button>
    </form>
  )
}


