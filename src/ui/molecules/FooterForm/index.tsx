import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { Input } from '../../atoms/Input';
import Button from '../../atoms/Button';
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
          alert('Message sent successfully')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <span>Mustard Seed Lawyers Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, dignissimos.</span>
      <form ref={form} onSubmit={sendEmail}>
        <Input type="text" name="user_name" placeholder="Name" />
        <Input type="tel" name="user_phone" placeholder="Phone"/>
        <Input type="email" name="user_email" placeholder="Email"/>
        <Input type="text" name="user_subject" placeholder="Subject"/> 
        <textarea name="message" placeholder="Message" />
        <Button type="submit" className={'btn-round'} text={'Send'}  />
      </form>
    </div>
  )
}

export default FooterForm
