import React from 'react'
import './footer.css'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/WhatIsThePoint" target="_blank"><AiFillTwitterCircle/></a>
        <a href="https://github.com/WhatIsThePoint" target="_blank"><BsDiscord/></a>
        <a href="https://github.com/WhatIsThePoint" target="_blank"><AiFillInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Nova. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer