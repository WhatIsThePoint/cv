import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {MdLocalOffer} from 'react-icons/md'
import {MdMessage} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {
  const[activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} 
      className={activeNav==='#' ? 'active':''}><AiFillHome/></a>
      
      <a href="#about" onClick={()=>setActiveNav('#about')}
      className={activeNav==='#about' ? 'active':''}
      ><AiFillInfoCircle/></a>
      
      <a href="#experience" onClick={()=>setActiveNav('#experience')}
      className={activeNav==='#experience' ? 'active':''}><MdWork/></a>
      
      <a href="#services" onClick={()=>setActiveNav('#services')}
      className={activeNav==='#services' ? 'active':''}><MdLocalOffer/></a>
      
      <a href="#contact" onClick={()=>setActiveNav('#contact')}
      className={activeNav==='#contact' ? 'active':''}><MdMessage/></a>
    </nav>
  )
}

export default Nav