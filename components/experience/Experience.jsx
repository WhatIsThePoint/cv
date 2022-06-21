import React from 'react'
import './experience.css'
import {GoVerified} from 'react-icons/go'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Personal Skills</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__skill1">
          <h3>
            Web Development
          </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>Html</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>MySql</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__skill2">
        <h3>
            Software, Game  & More...
          </h3>
          <div className="experience__content">
          <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
          </article>
          <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>Unity 2D</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>Unity 3D</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>Unreal Engine </h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <GoVerified/>
              <div>
              <h4>Blender</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default Experience