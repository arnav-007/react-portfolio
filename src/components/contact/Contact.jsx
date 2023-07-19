import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
const form =useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_3lyyvky', 'template_iw1l6rp', form.current, 'Dp-EBgKnhUjg4ERqe')

};
  return (
    <section id='contact'>contact
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>


    <div className="container contact__container">
      <div className='contact__options'>
      <article className='contact__option'>
        <AiOutlineMail className='contact__option-icon'/>
       <h4>Email</h4>
       <h5>arnavsha94.jpr@gmail.com</h5>
       <a href="mailto:arnavsha94.jpr@gmail.com" target='_blank'>send a message</a>
      </article>
      <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon'/>
       <h4>Messanger</h4>
       <h5>Arnav Sharma</h5>
       <a href="https://m.me/arnav.sharma.79677" target='_blank'>send a message</a>
      </article>
      <article className='contact__option'>
        <BsWhatsapp  className='contact__option-icon'/>
       <h4>Whatsapp</h4>
       <h5>+917014843566</h5>
       <a href="http://api.whatsapp.com/send?phone=917014843566" target='_blank'>send a message</a>
      </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
       <input type="text" name='name' placeholder='Your Full Name' required />
       <input type="email" name='email' placeholder='Your Email' required />
       <textarea name="message" rows="7" placeholder = 'your message' required ></textarea>
       <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    
    </section>
  )
}

export default Contact