import React, { useState } from 'react'
import { useFormik } from 'formik'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length < 2) {
    errors.name = 'Your name have to be at least 2 characters long'
  }

  if (!values.message) {
    errors.message = 'Required'
  } else if (values.message.length < 2) {
    errors.message = 'Your message have to be at least 2 characters long'
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors;
}

export const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false)
  const [messageNotSent, setMessageNotSent] = useState(false)

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: async (values) => {
      console.log(values)

      try {
        const response = await fetch('http://localhost:4000/api/message/', {
          method : 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })

        if (!response.ok) {
          throw new Error('Something went wrong')
        }

        const data = await response.json()
        console.log(data)

        setMessageSent(true)
        setMessageNotSent(false)
        form.resetForm()
      } catch (error) {
        console.error('Failed to send message', error)
        setMessageNotSent(true)
      }
    },
  })

  return (
    <form className='text-center' onSubmit={form.handleSubmit} noValidate>
      <label>
        Name
        <input className='border block w-full mb-3 rounded' type="text" name="name" {...form.getFieldProps('name')} required />
        {form.touched.name && form.errors.name ? (
          <div className='text-xs text-red-600' >{form.errors.name}</div>
        ) : null}
      </label>
      <label>
        Email
        <input className='border block w-full mb-3 rounded' type="email" name="email" {...form.getFieldProps('email')} required />
        {form.touched.email && form.errors.email ? (
          <div className='text-xs text-red-600' >{form.errors.email}</div>
        ) : null}
      </label>
      <label>
        Message
        <textarea className='border block w-full rounded' name="message" rows={4} {...form.getFieldProps('message')} required />
        {form.touched.message && form.errors.message ? (
          <div className='text-xs text-red-600' >{form.errors.message}</div>
        ) : null}
      </label>
      <button className='bg-blue-950 text-white mt-2 border block w-full p-1 rounded hover:bg-blue-900' type="submit">Send</button>
      {messageSent && <p>Message sent, thank you!</p>}
      {messageNotSent && <p>Failed to send message, please try again!</p>}
    </form>
  )
}

