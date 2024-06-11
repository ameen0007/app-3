import React, { useEffect } from 'react'
import './header.scss'
import Aos from "aos";
import 'aos/dist/aos.css';

export const Header = () => {
  useEffect(() => {
    Aos.init({duration : '2000'})
   },[])

  return (
    <div className='header-div' data-aos="fade-down">
        <div><img src="logo.png" alt="" /></div>
        <p>CODE CRAFT SOLUTION</p>
    </div>
  )
}
