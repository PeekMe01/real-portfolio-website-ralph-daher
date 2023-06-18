import React from 'react'
import './footer.css'
import LOGO from '../../assets/Logo.png'

const Footer = () => {
  return (
    <footer className='footer__container'>
      <a href="#" className='footer__logo'>Ralph</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <img src={LOGO} alt="PeekMe_LOGO" className='logo'/>
    
      <div className="footer__copyright">
        <small>&copy; PeekMe. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
