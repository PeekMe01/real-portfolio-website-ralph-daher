import React from 'react'
import './skills.css'
import Skill from './Skill'

const Skills = () => {
  return (
    <section id='skills'>
      <div className='container container__skills'>
        <div className="skills__content">
          <div className="leftTable">
            <Skill skill='Java' level={4}/>
            <Skill skill='C++' level={4}/>
            <Skill skill='C#' level={2}/>
            <Skill skill='Python' level={1}/>
            <Skill skill='HTML' level={5}/>
            <Skill skill='CSS' level={5}/>
            <Skill skill='JavaScript' level={4}/>
          </div>
          <div className="rightTable">
            <Skill skill='React' level={3}/>
            <Skill skill='SQL | PL/SQL' level={4}/>
            <Skill skill='Entity Framework' level={3}/>
            <Skill skill='SEO' level={2}/>
            <Skill skill='GitHub' level={4}/>
            <Skill skill='UI-UX' level={4}/>
            <Skill skill='Problem Solving' level={4}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
