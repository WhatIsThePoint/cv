import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lmefftk', 'template_9s106mb', form.current, 's8_KccoYXDgTKLSD-')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>youssef.hammi.pm@gmail.com</h5>
            <a href="mailto:youssef.hammi.pm@gmail.com" target="_blank">Send An Email</a>
          </article>
          <article className="contact__option">
            <AiFillTwitterCircle className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>excited_undead</h5>
            <a href="https://twitter.com/excited_undead"target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
            <BsDiscord className='contact__option-icon'/>
            <h4>Add Me On Discord</h4>
            <h5>Almighty そら#4550</h5>
            <a href="https://discord.com/"target="_blank">Send A Friend Request</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message'required rows="7"></textarea>
          <button type="submit" className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact