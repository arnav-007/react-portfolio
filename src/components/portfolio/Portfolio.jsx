import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Movie recommendation System',
    github: 'https://github.com/arnav-007/Movie_Recommendation_System_new',
    demo: 'https://cdn.dribbble.com/userupload/7390504/file/original-149e9dd28fb9224f5c3ed852e839534f.jpg?compress=1&resize=752x'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Drowsiness Detection System',
    github: 'https://github.com/AtigPurohit/DrowsinessDetection',
    demo: 'https://dribbble.com/shots/19964867-Skin-Detection-System'
  },
  {
    id: 3,
    image: IMG3,
    title: 'MUltiple Disease detection System',
    github: 'https://github.com/arnav-007/Multiplediseaseprediction',
    demo: 'https://dribbble.com/shots/20818270-MyCough-web-design'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Chatbot',
    github: 'https://github.com/arnav-007/chatbot',
    demo: 'https://dribbble.com/shots/20958177-Ai-chat-bot-application-downloadable'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Face mask detection',
    github: 'https://github.com/arnav-007/chatbot',
    demo: 'https://dribbble.com/shots/20704616-DTECT-data-research-and-security-saas-logo-design'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio',
    github: '',
    demo: 'https://dribbble.com/shots/20830385-Digital-Analytics-Platform'

  }

]
const portfolio = () => {
  return (
    <section id='portfolio'>portfolio
    <h5>My recent work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio__container'>
      {
     data.map(({id, image, title, github, demo}) => {
      return (
        <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
          <a href= {github} className='btn'>Github</a>
          <a href= {demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>

       )


     })
    }
    
    </div>
    </section>
  )
}

export default portfolio