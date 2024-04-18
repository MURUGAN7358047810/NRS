import React, { useContext, useState } from 'react'
import './navbar.css'
import Oil1 from '../img/oil1.png'
import nrs from '../img/nrs_logo.png'
import search_icon from '../img/search_icon.png'
import basket_icon from '../img/basket_icon.png'
import { Link } from 'react-router-dom'
import LoginPopup from './LoginPopup'
import { StoreContext } from '../context/StoreContext'



const Navbar = () => {

 const [menu, setMenu] = useState("menu");

 const {getTotalCartAmount} = useContext(StoreContext);

 const [showLogin, setShowLogin] = useState(false);
 

  return (
    <>
    <div className='navbar'>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/> : <></>}
    <Link to='/'><img src={nrs} alt="" className='logo'/></Link>
      <ul className="navbar-menu">
      <Link to='/' onClick={()=>setMenu('home')} className={menu=='home'?'active':''}>home</Link>
      <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu=='menu'?'active':''}>menu</a>
      <a href='#app-download' onClick={()=>setMenu('mobile-app')} className={menu=='mobile-app'?'active':''}>mobile-app</a>
      <a href='#footer' onClick={()=>setMenu('contact-us')} className={menu=='contact-us'?'active':''}>contact us</a>
      </ul>
      <div className="navbar-right">
      <img src={search_icon} alt="" />
      <div className="navbar-search-icon">
      <Link to='/cart'><img src={basket_icon} alt="" /></Link>
      <div className={getTotalCartAmount()?"":"dot"}></div>
      </div>
      
      <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>  
    </div>
    </>
  )
}

export default Navbar
