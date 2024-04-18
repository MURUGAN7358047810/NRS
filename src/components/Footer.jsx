import React from 'react'
import './Footer.css'
import nrs from '../img/nrs_logo.png'
import facebook from './facebook_icon.png'
import twitter from './twitter_icon.png'
import  linkedin from './linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer content">
      <div className="footer-content-left">
         <img src={nrs} alt="" width={50} height={50} />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quidem adipisci perferendis eveniet ipsa alias, nam harum nesciunt voluptatibus laudantium?</p>
         <div className="foote-social-icons">
         <img src={facebook} alt="" />
         <img src={twitter} alt="" />
         <img src={linkedin} alt="" />
         </div>
      </div>
      <div className="footer-content-center">
      <h2>COMPANY</h2>

      <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Delivery</li>
      <li>Privacy Policy</li>
      </ul>

      </div>
      <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>

        <ul>
        <li>+91-7358047810</li>
        <li>muruganmanoj590@gmail.com</li>
        </ul>

      </div>
      </div>
      <p className="footer-copyright">CopyRight 2024 c pradhi.com - All Rights are reserved </p>
    </div>
  )
}

export default Footer
