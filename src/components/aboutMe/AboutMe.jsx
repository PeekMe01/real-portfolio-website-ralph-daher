import React, { useState, useEffect } from 'react'
import './aboutMe.css'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import IMG from '../../assets/About Me Picture.jpg'
import {BsPersonWorkspace} from 'react-icons/bs'
import {AiOutlineTeam} from 'react-icons/ai'
import {MdOutlineSelfImprovement} from 'react-icons/md'

const AboutMe = () => {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch data from the PHP file
    fetch('../../classes/aboutme.classes.php')
      .then(response => response.json())
      .then(result => {
        setUserData(result);
        console.log(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <section id='about'>
      <div className='container container__aboutMe'>
        <Zoom>
          <h5 className='text-light'>Get To Know Me</h5>
          <h2>About Me</h2>
          {/* {userData} */}

        <article className='aboutMe__paragraph'>
          <Fade>
            <img className='AboutMePhoto' src={IMG} alt="AboutMePhoto"/>
            <p className='AboutMeText'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Fade>
        </article>
        </Zoom>
        <div className='aboutMe__content'>
          <Zoom>
          <article className='aboutMe__card'>
            <BsPersonWorkspace className='aboutMe_icon'/>
            <h5>Quick Learner</h5>
            <small>Something new you want me to learn? Sure, 1 week is all I need.</small>
          </article>
          </Zoom>
          <Zoom>
          <article className='aboutMe__card'>
            <AiOutlineTeam className='about__icon'/>
            <h5>Team Player</h5>
            <small>I understand the importance of teamwork, and I'm always down to work with someone who's willing to work.</small>
          </article>
          </Zoom>
          <Zoom>
          <article className='aboutMe__card'>
            <MdOutlineSelfImprovement className='about__icon'/>
            <h5>Always Improving</h5>
            <small>There's a 90% chance that while you're reading this I'm sharpening my skills and learning new things.</small>
          </article>
          </Zoom>
        </div>
        <Zoom>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </Zoom>
      </div>
    </section>
  )
}

export default AboutMe
