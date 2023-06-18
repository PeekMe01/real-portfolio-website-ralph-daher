import React from 'react'
import './skills.css'
import SkillLevel from './SkillLevel';
import Zoom from 'react-reveal/Zoom'

function Skill(props) {
    const{skill,level} = props;
  return (
    <div className='skillContainer'>
      <Zoom>
        <h2>{skill}</h2>
      </Zoom>
        <SkillLevel level={level}/>
    </div>
  )
}

export default Skill

