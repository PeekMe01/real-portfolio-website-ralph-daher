import React, { useState } from 'react'
import './photoSection.css'
import IMG from '../../assets/portal.png'
import Zoom from 'react-reveal/Zoom'
import { useScrollDirection } from './useScrollDirection';

const PhotoSection = () => {
  const scrollDirection = useScrollDirection();
  let [scale,setScale] = useState(1);
  let [opacity,setOpacity] = useState(1);

  window.addEventListener('scroll', ()=>{
    const vh = window.innerHeight / 100;
    const scrollTop = document.documentElement.scrollTop;
    const start = 100 * vh;
    const stop = 400 * vh;
    if (scrollDirection === 'down' && (scrollTop>start&&scrollTop<stop)) {
      if(opacity>0){
        setOpacity(()=>opacity-0.02);
      }
      if(scale<4){
        setScale(()=>scale+0.05);
      }
    }else
    if (scrollDirection === 'up' && (scrollTop>start&&scrollTop<200*vh)) {
      if(opacity<1){
        setOpacity(()=>opacity+0.02);
      }
      if(scale>1){
        setScale(()=>scale-0.05);
      }
    }
  })

  return (
    <div className='container photo__container'>
      <Zoom><p className='arrowDown'>&#x2193;</p></Zoom>
      <Zoom>
        <div className="wrap">
        <img id="zoom"  src={IMG} alt='scroll it'
          style={{
            transition: "transform 1ms ease-in-out",
            transform: `scale(${scale})`,
            opacity: `${opacity}`
          }}
        />
        </div>
      </Zoom>
      <div className='Test'></div>
  </div>
  )
}
export default PhotoSection
