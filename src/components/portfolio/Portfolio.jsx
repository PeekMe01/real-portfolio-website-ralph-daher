import React from 'react'
import './portfolio.css'
import Project from './Project'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.png'
import './portfolio.css'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Car Dealership Management',
    github: 'https://github.com/HyperJAK/CarDealership-Maven-Runnable'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hospital Management System',
    github: 'https://github.com/PeekMe01/Hospital-Management-System'
  },
  {
    id: 3,
    image: IMG3,
    title: 'UI-UX W4Kitchen cooking website & app Design',
    figma: 'https://www.figma.com/file/7Ki5oDpHGewYVtXTnNBfpy/UI%2FUX-Design-Project-Sketches?type=design&node-id=0%3A1&t=igXEUCjOWloGndta-1'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Student add/remove To Database',
    github: 'https://github.com/PeekMe01/Student-add-remove-to-Database'
  },
  {
    id: 5,
    image: IMG5,
    title: 'AI hand tracking and finger counter',
    github: 'https://github.com/PeekMe01/AIFingerCountingProject'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Multilayer Perceptron Back Propagation GUI',
    github: 'https://github.com/PeekMe01/MultiLayerPerceptron'
  },
]

const Portfolio = () => {
  return (  
    <section id='portfolio'>
      <div className='container portfolio__container'>
        <div className='portfolio__titles'>
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </div>

        <div className="portfolio__content">
          {
            data.map(({id,image,title,github,figma,details})=>{
              return(
                <Project id={id} image={image} title={title} github={github} figma={figma} details={details}/>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio
