import React, { useEffect, useState } from 'react'
import './Navbar.css'
import picture from "../../assets/the.jpeg"
import { Link} from "react-router-dom"
import { Link as Scroll, animateScroll as scroll } from "react-scroll";
import menuicon from '../../assets/menuicon.jpeg'



const Navbar = () => {

  const [sticky, setSticky] = useState(false);

 useEffect(()=> {
  window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
 }, []);
 
 const[mobileMenu, setMobileMenu] = useState(false);


 const toggleMenu= () =>{
  mobileMenu ?  setMobileMenu(false) : setMobileMenu(true);

 }
 
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={picture} alt="picture" className='picture' />
      <ul className={mobileMenu ?'':'hide-mobile-icon  '}>
        <li><Scroll to='hero' smooth={true} offset={0} duration={500}>Home</Scroll></li>
        <li><Scroll to='program' smooth={true} offset={0} duration={500}>Program</Scroll></li>
        <li><Scroll to='about' smooth={true} offset={0} duration={500}>About us</Scroll></li>
        <li><Scroll to='campus' smooth={true} offset={0} duration={500}>Campus</Scroll></li>
        <li><Scroll to='testimonial' smooth={true} offset={0} duration={500}>Testimonial</Scroll></li>
        <li><Scroll to='contact' smooth={true} offset={0} duration={500}><button className='btn'>Contact Us</button></Scroll></li>
      </ul>
      <img src={menuicon} alt=""className='menuicon' onClick={toggleMenu} />
    </nav>
    
  )

}

export default Navbar
