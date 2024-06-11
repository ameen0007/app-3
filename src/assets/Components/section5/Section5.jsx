import React, { useEffect } from "react";
import "./section5.scss";
import Aos from "aos";
import 'aos/dist/aos.css';
export const Section5 = () => {
  useEffect(() => {
    Aos.init({duration : '2000'})
   },[])
  const handleCallButtonClick = () => {
    window.location.href = "tel:+918089424657"; // Replace +1234567890 with your phone number
  };

  const handleEmailButtonClick = () => {
    window.location.href = "mailto:codecraftsolutions0@gmail.com"; // Replace example@example.com with your email address
  };
  const handleWhatsAppButtonClick = () => {
    window.location.href = "https://wa.me/918089424657?text=Hi%20there!%20I%20wanted%20to%20reach%20out%20and%20express%20my%20interest%20in%20your%20services.%20Looking%20forward%20to%20connecting%20with%20you%20and%20exploring%20how%20we%20can%20collaborate%20to%20bring%20my%20ideas%20to%20life.%20Have%20a%20wonderful%20day!";
    // This will initiate a WhatsApp chat to +918089424657 with a pre-filled message expressing interest in your services
};

  return (
    <>
      <div className="sec5h1">
        <div className="inh1" data-aos="fade-up">
          <h1>CONTACT US</h1>
        </div>
      </div>

      <div className="main-con">
        <div data-aos="fade-right" onClick={handleCallButtonClick} className="inner-con">
          <div className="img">
            <img style={{width : '38px'}}  src="call.png" alt="" />
          </div>
          <p>Call</p>
        </div>
        <div data-aos="fade-right" onClick={handleEmailButtonClick} className="inner-con">
          <div className="img">
            <img style={{width : '45px'}} src="gmail.png" alt="" />
          </div>
          <p>Email</p>
        </div>
        <div data-aos="fade-right" onClick={handleWhatsAppButtonClick} className="inner-con">
          <div className="img">
          <img style={{width : '50px'}}  src="whatsapp.png" alt="" />
          </div>
          <p>WhatsApp</p>
        </div>
      </div>
    </>
  );
};
