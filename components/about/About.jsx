import React from 'react'
import './about.css'
import img from '../../assets/me.png'
import {GiAchievement} from 'react-icons/gi'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__img">
          <div className="about__img2">
            <img src={img} alt="aboutimg" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiAchievement className='about__icon'/>
              <h5>Awards</h5>
              <small>2 Best Project Awards For Web && Game Development </small>
            </article>
            <article className='about__card'>
              <GiAchievement className='about__icon'/>
              <h5>Certifications</h5>
              <small>6 Certifications: Web && Game Dev</small>
            </article>
            <article className='about__card'>
              <GiAchievement className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Of Game && Web Development </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about