import React, { useState } from 'react'

export const ContactForm = () => {
   const [formData, setFormdata] = useState({
        name: '',
        email: '',
        message: ''
    })

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

        alert('Message sent')
        setFormdata({
            name: '',
            email: '',
            message: ''
        })
    } catch (error){
        console.error('Failed to send message', error)
        alert('Failed to send message')
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
    </form>
    </div>
  )
  }