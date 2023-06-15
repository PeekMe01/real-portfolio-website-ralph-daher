import React from 'react'
import './navigation.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiNetworkChart, BiMessageRounded} from 'react-icons/bi'
import {useState} from 'react'

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#'? 'active' : ' '}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about'? 'active' : ' '}><AiOutlineUser/></a>
      <a href="#skills" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ' '}><BiBook/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active' : ' '}><BiNetworkChart/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact'? 'active' : ' '}><BiMessageRounded/></a>
    </nav>
  )
}

export default Navigation

