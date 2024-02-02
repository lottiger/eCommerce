import React, { useState } from 'react'
import { useFormik } from 'formik'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2) {
    errors.name = 'Your name have to be at least 2 characters long';
  }

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length < 2) {
    errors.message = 'Your message have to be at least 2 characters long';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address';
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
        const response = await fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
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
      <label className=''>
        Name
        <input className='border block w-full mb-3 rounded' type="text" name="name" {...form.getFieldProps('name')} required />
        {form.touched.name && form.errors.name ? (
          <div className='text-xs text-red-600' >{form.errors.name}</div>
        ) : null}
      </label>
      <label className=''>
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

// import React, { useState } from 'react'
// import { useFormik } from 'formik'

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//  if (!values.name) {
//     errors.name = 'Required';
//   } else if (values.name.length < 2) {
//     errors.name = 'Your name have to be at least 2 characters long';
//   }

//   if (!values.message) {
//     errors.message = 'Required';
//   } else if (values.message.length < 2) {
//     errors.message = 'Your message have to be at least 2 characters long';
//   }
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!emailRegex.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

// export const ContactForm = () => {
//   const [messageSent, setMessageSent] = useState(false)
//   const [messageNotSent, setMessageNotSent] = useState(false)

//   const form = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       message: '',
//     },
//     validate,
//     onSubmit: async (values) => {
//       console.log(values)

//       try {
//         const response = await fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
//           method : 'POST',
//           headers: {
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(values),
//         })

//         if (!response.ok) {
//           throw new Error('Something went wrong')
//         }

//         const data = await response.json()
//         console.log(data)

//         setMessageSent(true)
//         setMessageNotSent(false)
//         form.resetForm()
//       } catch (error) {
//         console.error('Failed to send message', error)
//         setMessageNotSent(true)
//       }
//     },
//   })

//   return (
//     <form className='text-center' onSubmit={form.handleSubmit} noValidate>
//       <label className=''>
//         Name
//         <input className='border block w-full mb-3 rounded' type="text" name="name" {...form.getFieldProps('name')} required />
//         {form.touched.name && form.errors.name ? (
//           <div>{form.errors.name}</div>
//         ) : null}
//       </label>
//       <label className=''>
//         Email
//         <input className='border block w-full mb-3 rounded' type="email" name="email" {...form.getFieldProps('email')} required />
//         {form.touched.email && form.errors.email ? (
//           <div>{form.errors.email}</div>
//         ) : null}
//       </label>
//       <label>
//         Message
//         <textarea className='border block w-full rounded' name="message" rows={4} {...form.getFieldProps('message')} required />
//         {form.touched.message && form.errors.message ? (
//           <div>{form.errors.message}</div>
//         ) : null}
//       </label>
//       <button className='bg-blue-950 text-white mt-2 border block w-full p-1 rounded hover:bg-blue-900' type="submit">Send</button>
//       {messageSent && <p>Message sent, thank you!</p>}
//       {messageNotSent && <p>Failed to send message, please try again!</p>}
//     </form>
//   )
// }

// import React, { useState } from 'react'

// export const ContactForm = () => {
//    const [formData, setFormdata] = useState({
//         name: '',
//         email: '',
//         message: ''
//     })

//     const [messageSent, setMessageSent] = useState(false)
//     const [messageNotSent, setMessageNotSent] = useState(false)
//    const handleChange = (e) => {
//     setFormdata({
//         ...formData,
//         [e.target.name]: e.target.value,
//     })
//    } 

//    const handleSubmit = async (e) => {
//     e.preventDefault()
//     console.log(formData)

//     try{
//         const response = await fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
//             method : 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//         if (!response.ok) {
//             throw new Error('Something went wrong')
//         }
//         const data = await response.json()
//         console.log(data)

//         setMessageSent(true)
//         setMessageNotSent(false)
//         setFormdata({
//             name: '',
//             email: '',
//             message: ''
//         })
//     } catch (error){
//         console.error('Failed to send message', error)
//         setMessageNotSent(true)
//     }
//    }
//   return (
   
//          <form className='text-center' onSubmit={handleSubmit}>
//       <label className=''>
//         Name
//         <input className='border block w-full mb-3 rounded' type="text" name="name" value={formData.name} onChange={handleChange} required />
//       </label>
//       <label className=''>
//         Email
//         <input className='border block w-full mb-3 rounded' type="email" name="email" value={formData.email} onChange={handleChange} required />
//       </label>
//       <label>
//         Message
//         <textarea className='border block w-full rounded' name="message" rows={4} value={formData.message} onChange={handleChange} required />
//       </label>
//       <button className='bg-blue-950 text-white mt-2 border block w-full p-1 rounded hover:bg-blue-900' type="submit">Send</button>
//       {messageSent && <p>Message sent, thank you!</p>}
//       {messageNotSent && <p>Failed to send message, please try again!</p>}
//     </form>
    
//   )
//   }
