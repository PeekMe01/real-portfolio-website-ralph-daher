import React, { useState, useEffect } from 'react'
import './skills.css'
import Skill from './Skill'
import Zoom from 'react-reveal/Zoom'

const Skills = () => {

  const [skill, setSkill] = useState([{skill_id: 0, skill_name: '', skill_level: 0}]);

  useEffect(() => {
    // Fetch data from the PHP file
    fetch('http://localhost:8081/skills')
      .then(response => response.json())
      .then(result => {
        setSkill(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <section id='skills'>
      <div className='container container__skills skillContainer'>
      <div className='top__text'>
        <Zoom>
          <h5 className='text-light'>What Skills I Have</h5>
          <h2>My Skills</h2>
        </Zoom>
      </div>

        {/* <div className="skills__content">
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
        </div> */}

        <div className="skills__content">
          <div className="leftTable">
              {skill.slice(0,(skill.length/2)+1).map((object, i) => <Skill id={object.skill_id} skill={object.skill_name} level={object.skill_level} />)}
          </div>
          <div className="rightTable">
              {skill.slice((skill.length/2)+1,skill.length).map((object, i) => <Skill id={object.skill_id} skill={object.skill_name} level={object.skill_level} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
