import React from 'react'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

const footer = () => {
  return (
     <footer>
      <a href='#' className='footer__logo'>ARNAV</a>


      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#Portfolio">Portfolio </a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/arnav.sharma.79677/"><FiFacebook/></a>
        <a href="https://www.instagram.com/_arnavv_/"><BsInstagram/></a>
        <a href="https://twitter.com/arnavsh49356571"><AiOutlineTwitter/></a>
      </div>
     </footer>
  )
}

export default footer