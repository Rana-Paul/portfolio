import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/my.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rana Paul</h1>
        <h5>Full-Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img className='my_image' src={ME} alt="Profile Image" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header