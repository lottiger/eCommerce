import { useFormik } from 'formik'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

export const LoginForm = () => {
    const { login, token } = useAuth()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
  
  const form = useFormik ({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values)

      const {error, success} = await login(values.email, values.password)

      if(error) {
        setError (error)
        console.log(error)
      }
        if (success) {
            setSuccess(success)
            // history.push('/auth/login')
            // navigate ('/private')
        }
    }
  })

    return (
    <form onSubmit={form.handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <input id='email' type="email" value={form.values.email} onChange={form.handleChange} className="border block w-full" />

            <label htmlFor="password">Password</label>
            <input id='password' type="password" value={form.values.password} onChange={form.handleChange} className="border block w-full" />


        </div>
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <button type='submit'>Login</button>
    </form>
  )
}
