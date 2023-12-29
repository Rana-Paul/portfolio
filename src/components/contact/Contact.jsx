import React, {useRef} from 'react'
import './contact.css'
import  {MdOutlineEmail} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_z806c83', 'template_asc91xq', form.current, '6KYeDw-vR9tUpLv78')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>ranapaul741223@gmail.com</h5>
            <a href="mailto:ranapaul741223@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsTwitter className='contact_option-icon'/>
            <h4>Twitter</h4>
            <h5>@ranapaul741223</h5>
            <a href="https://twitter.com/ranapaul741223" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7718313458</h5>
            <a href="https://wa.me/917718313458" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact