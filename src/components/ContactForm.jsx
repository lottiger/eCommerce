import React, { useState } from 'react'

export const ContactForm = () => {
   const [formData, setFormdata] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [messageSent, setMessageSent] = useState(false)
    const [messageNotSent, setMessageNotSent] = useState(false)
   const handleChange = (e) => {
    setFormdata({
        ...formData,
        [e.target.name]: e.target.value,
    })
   } 

   const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    try{
        const response = await fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        if (!response.ok) {
            throw new Error('Something went wrong')
        }
        const data = await response.json()
        console.log(data)

        setMessageSent(true)
        setMessageNotSent(false)
        setFormdata({
            name: '',
            email: '',
            message: ''
        })
    } catch (error){
        console.error('Failed to send message', error)
        setMessageNotSent(true)
    }
   }
  return (
   
         <form className='text-center' onSubmit={handleSubmit}>
      <label className=''>
        Name
        <input className='border block w-full mb-3 p-1 rounded' type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label className=''>
        Email
        <input className='border block w-full mb-3 p-1 rounded' type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Message
        <textarea className='border block w-full rounded' name="message" rows={4} value={formData.message} onChange={handleChange} required />
      </label>
      <button className='bg-blue-950 text-white mt-2 border block w-full p-1 rounded hover:bg-blue-900' type="submit">Send</button>
      {messageSent && <p>Message sent, thank you!</p>}
      {messageNotSent && <p>Failed to send message, please try again!</p>}
    </form>
    
  )
  }
