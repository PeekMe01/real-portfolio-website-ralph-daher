import React from 'react'
import './header.css'
import ME from '../../assets/Profile Pic.jpg'
import CTA from './CTA'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const Header = () => {
  return (
    <Fade>
    <header className='container'>
      <div className="header__container">
        <div className="titles">
          <h1 className='light-yellow'>Ralph Daher</h1>
          <small className='text-light'>University Student</small>
        </div>
        <div>
          <img src={ME} alt="Profile Pic" className='profilePicture'/>
        </div>
      </div>
      <hr/>
      <Zoom><CTA/></Zoom>
    </header>
    </Fade>
  )
}

export default Header
