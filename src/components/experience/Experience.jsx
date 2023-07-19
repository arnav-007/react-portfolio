import React from 'react'
import './experience.css'
import {BsCheckCircle} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>experience
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className='experience__content'>
        <article className= 'experience_details'>
          <BsCheckCircle className='experience__details-icons' />
         <div>
         <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
        <article className= 'experience_details'>
          <BsCheckCircle className='experience__details-icons' />
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className= 'experience_details'>
          <BsCheckCircle className='experience__details-icons' />
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className= 'experience_details'>
          <BsCheckCircle className='experience__details-icons' />
          <div>
          <h4>React</h4>
          <small className='text-light'>Basic</small>
          </div>
        </article>
        <article className= 'experience_details'>
          <BsCheckCircle className='experience__details-icons' />
          <div>
          <h4>Flask</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article> 
       </div>
      </div>
      <div className="experience__backend">
      <h3>Backend Development</h3>
      <div className='experience__content'>
        <article className= 'experience_details'>
          <BsCheckCircle className='experience__details-icons' />
          <div>
          <h4>Data Analysis</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className= 'experience_details'>
          <BsCheckCircle className='experience__details-icons' />
          <div>
          <h4>Machine learning</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className= 'experience_details'>
          <BsCheckCircle className='experience__details-icons' />
          <div>
          <h4>Deep learning</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>
        <article className= 'experience_details'>
          <BsCheckCircle className='experience__details-icons' />
          <div>
          <h4>Python</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>
        <article className= 'experience_details'>
          <BsCheckCircle className='experience__details-icons' />
          <div>
          <h4>MySql</h4>
          <small className='text-light'>Basic</small>
          </div>
        </article> 
      </div>
      </div>
    </div>
    </section>
  )
}

export default experience