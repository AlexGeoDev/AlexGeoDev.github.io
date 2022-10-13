import React, { useState } from 'react'
import perfil from '../../Images/perfil-circle.png'
import profile from '../../Images/portrait_body.jpg'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {

  const [about, setAbout] = useState('Hola')
  const [work, setWork] = useState('Yo soy')
  const [contact, setContact] = useState('Alexander')

  return (
    <>
      <div className='cont-home'>
        <picture className='cont-image'>
          <source
            className='image-profile'
            srcSet={profile}
            media="(min-width: 768px)" />
          <img
            className='image-perfil'
            src={perfil}
            alt='Autor del portafolio' />
        </picture>
        <div className='menu'>
          <div>
            <Link to="/about" className='a-link'>
              <p
                className='c1'
                onMouseEnter={() => setAbout('Acerca de mi')}
                onMouseLeave={() => setAbout('Hola')}
              >
                {about}
              </p>
            </Link>
            {/* <a href='/#/about' className='a-link'>
              <p
                className='c1'
                onMouseEnter={() => setAbout('Acerca de mi')}
                onMouseLeave={() => setAbout('Hola')}
              >
                {about}
              </p>
            </a> */}
          </div>
          <div>
            <a href="" className='a-link'>
              <p
                className='c2'
                onMouseEnter={() => setWork('Proyectos')}
                onMouseLeave={() => setWork('Yo soy')}
              >
                {work}
              </p>
            </a>
          </div>
          <div>
            <a href="" className='a-link'>
              <p
                className='c3'
                onMouseEnter={() => setContact('Contactame')}
                onMouseLeave={() => setContact('Alexander')}
              >
                {contact}
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export { Home };