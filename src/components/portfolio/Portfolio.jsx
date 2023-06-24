import React, {useState, useEffect} from 'react'
import './portfolio.css'
import Project from './Project'
import './portfolio.css'

// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: 'Car Dealership Management',
//     github: 'https://github.com/HyperJAK/CarDealership-Maven-Runnable'
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: 'Hospital Management System',
//     github: 'https://github.com/PeekMe01/Hospital-Management-System'
//   },
//   {
//     id: 3,
//     image: IMG3,
//     title: 'UI-UX W4Kitchen cooking website & app Design',
//     figma: 'https://www.figma.com/file/7Ki5oDpHGewYVtXTnNBfpy/UI%2FUX-Design-Project-Sketches?type=design&node-id=0%3A1&t=igXEUCjOWloGndta-1'
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: 'Student add/remove To Database',
//     github: 'https://github.com/PeekMe01/Student-add-remove-to-Database'
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: 'AI hand tracking and finger counter',
//     github: 'https://github.com/PeekMe01/AIFingerCountingProject'
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: 'Multilayer Perceptron Back Propagation GUI',
//     github: 'https://github.com/PeekMe01/MultiLayerPerceptron'
//   },
// ]

const Portfolio = () => {
  const [project,setProject] = useState([{project_id: 0, project_title: '', project_photo: '', project_link: '', figma: ''}]);

  useEffect(() => {
  // Fetch data from the PHP file
  fetch('http://localhost:8081/projects')
    .then(response => response.json())
    .then(result => {
      setProject(result);
      console.log(result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);

  return (  
    <section id='portfolio'>
      <div className='container portfolio__container'>
        <div className='portfolio__titles'>
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </div>

        <div className="portfolio__content">
          {project.map((data)=>
              <Project id={data.project_id} image={data.project_photo} title={data.project_title} github={data.project_link} figma={data.figma}/>
          )}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
