import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import './index.scss'

const FooterForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_j01db4i',
        'template_xlnklyq',
        form.current,
        'lrU5A37fOn-1carJ2'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default FooterForm
