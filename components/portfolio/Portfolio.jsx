import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
const arr=[
  {
    id:1,
    image:IMG1,
    title:'Alt title',
    pjctn:'Tale Of The Nova Realm',
    github:'https://github.com/WhatIsThePoint',
    demo:'https://github.com/WhatIsThePoint'
  },
  {
    id:2,
    image:IMG2,
    title:'Alt title',
    pjctn:'Food Delivery App',
    github:'https://github.com/WhatIsThePoint',
    demo:'https://github.com/WhatIsThePoint'
  },
  {
    id:3,
    image:IMG3,
    title:'Alt title',
    pjctn:'Chat App',
    github:'https://github.com/WhatIsThePoint',
    demo:'https://github.com/WhatIsThePoint'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          arr.map(({id,image,title,pjctn,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{pjctn}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio