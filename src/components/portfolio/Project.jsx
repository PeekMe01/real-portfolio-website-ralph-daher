import React from 'react'
import './portfolio.css'
import Zoom from 'react-reveal/Zoom';

export default function Project(props) {
    const {id,image,title,github,figma,details} = props
  return (
    <Zoom>
    <article key={id} className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a href={github===undefined?figma:github} className='btn btn-primary' target='_blank'>Github</a>
      </div>
    </article>
    </Zoom>
  )
}
