import React from 'react'
import Buttons from './Buttons'
import './header.css'
import ME from '../../assets/wave.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  var dob = new Date("03/11/2004");    
  var month_diff = Date.now() - dob.getTime();  
  var age_dt = new Date(month_diff);  
  var year = age_dt.getFullYear();  
  var age = (year - 1970);  
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Youssef Hammi</h1>
        <h5 className="text-light">{age} y/o Passionate Developer</h5>
        <Buttons/>
        <HeaderSocials/>
        <div className='blog'>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>

  )
}

export default Header