import React from 'react'
import './about.css'
import MY from '../../assets/my.jpg'
import {LuAward} from 'react-icons/lu'
import {LuFolders} from 'react-icons/lu' 
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>


      <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
       <img src= {MY} alt = "About Image" />
      </div>

      </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <LuAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Internships</small>
            </article>
            <article className='about__card'>
              <LuFolders className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ projects completed</small>

            </article>
          </div> 
          <p>
          Welcome to my work portfolio! I'm Arnav sharma, a computer science engineering student in myfourth year of college.
          I have a deep passion for technology and a drive to excel in the field. As I prepare for placements, I'm holding my skills in programming,Data Science, and web development.
          I thrive on solving complex problems and continuously expanding my knowledge. Through my portfolio, you'll witness my growth and dedication as I showcase my projects and demonstrate my ability to deliver impactful solutions.
          Join me as I embark on this exciting journey towards a successful career in computer science engineering.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>

    </section>
  )
}

export default about