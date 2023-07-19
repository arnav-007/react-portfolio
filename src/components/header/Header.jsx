import React from 'react'
import './header.css'
import CTA from './CTA'
// import MY from '../../assets/my.jpg'
import MY from '../../assets/my about.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
     <div className="container header__container">
     <h5>Hello I'm</h5>
      <h1>Arnav Sharma</h1>
      <h5 className="text-light">Developer</h5>
      <CTA />
      <HeaderSocials />

      {/* <div className="my">
       <img src ={MY} alt="my" />
     </div> */}

     <div className="my about">
      <img src = {MY} alt="my about" />
     </div>

     <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>
    </header>
  )
}

export default Header

