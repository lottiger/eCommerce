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
    <div className='bg-blue-200'>
         <form className='flex flex-col' onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit">Send</button>
      {messageSent && <p>Message sent, thank you!</p>}
      {messageNotSent && <p>Failed to send message, please try again!</p>}
    </form>
    </div>
  )
  }
