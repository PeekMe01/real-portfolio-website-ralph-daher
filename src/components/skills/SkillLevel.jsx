import React from 'react'
import './skills.css'
import Zoom from 'react-reveal/Zoom'

export default function SkillLevel(props) {
    const{level} = props
  return (
    <div className='circle__container'>
      <Zoom><div className='circle' style={{background: level>=1?'var(--color-primary-variant)':'var(--color-grey'}}></div></Zoom>
      <Zoom><div className='circle' style={{background: level>=2?'var(--color-primary-variant)':'var(--color-grey'}}></div></Zoom>
      <Zoom><div className='circle' style={{background: level>=3?'var(--color-primary-variant)':'var(--color-grey'}}></div></Zoom>
      <Zoom><div className='circle' style={{background: level>=4?'var(--color-primary-variant)':'var(--color-grey'}}></div></Zoom>
      <Zoom><div className='circle' style={{background: level>=5?'var(--color-primary-variant)':'var(--color-grey'}}></div></Zoom>
    </div>
  )
}
