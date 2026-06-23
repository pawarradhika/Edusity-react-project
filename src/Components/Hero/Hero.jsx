import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
     <div className="hero-text">
      <h1>We ensure better education for a better world</h1>
      <p>Edusity is a leading educational institution dedicated to providing high-quality education and fostering a love for learning. With a commitment to excellence, we strive to empower our students with the knowledge and skills they need to succeed in their academic and professional endeavors.</p>
      <button className='btn'>Explore More <img src={dark_arrow} alt="Arrow" /></button>
      </div> 
    </div>
  )
}

export default Hero
