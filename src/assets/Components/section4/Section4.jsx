import React from "react";
import './section4.scss'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export const Section4 = () => {
  useEffect(() => {
    Aos.init({duration : '2000'})
   },[])
   
  return (
    <>
    <div className="main-h2">
    <div className="sec4h1" data-aos="fade-up">
        <h1  >ABOUT US</h1>
      </div>
    </div>
     
      <div className="inside-about">
        <div className="p" data-aos="fade-up">
          <p>
          In The Heart Of Kollam Bypass, Ayathil, Our Development Team Thrives. With The Distinguished PIN 691021, We're Dedicated To Crafting Exceptional Digital Solutions. Our Passion For Innovation And Years Of Expertise Drive Us To Create Cutting-Edge Products That Exceed Expectations. From Software Development To App Creation, We Specialize In Bringing Ideas To Life. Thank You For Choosing Us To Embark On This Journey Of Innovation. We're Excited To Build Remarkable Solutions Together.
          </p>
        </div>
        <div className="img" data-aos="fade-up">
          <img src="aboutus.jpg" alt="" />
        </div>
      </div>
    </>
  );
};
