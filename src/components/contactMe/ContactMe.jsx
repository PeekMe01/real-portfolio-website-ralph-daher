import './contactMe.css'
import {MdEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1tk1r9r', 'template_d6f8f1s', form.current, '8BgDMQSY-VXttVbry')
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <div className='portfolio__titles'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ralphdaher6@gmail.com</h5>
            <a href="mailto:ralphdaher6@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+961 81 358 691</h5>
            <a target='_blank' href="https://wa.me/96181358691?text=Hello,%20I'm%20interested%20in%20your%20resume.">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>daher.ralph</h5>
            <a href="https://www.instagram.com/daher.ralph/" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
