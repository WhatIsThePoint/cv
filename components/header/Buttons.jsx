import React from 'react'
import CV from  '../../assets/cv.pdf'
const Buttons = () => {
  return (
    <div className='Buttons'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact"className='btn btn-primary'>let's Talk</a>
    </div>
  )
}

export default Buttons