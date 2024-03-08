import React, { useEffect } from "react";
import "./section5.scss";
import Aos from "aos";
import 'aos/dist/aos.css';
export const Section5 = () => {
  useEffect(() => {
    Aos.init({duration : '2000'})
   },[])
  const handleCallButtonClick = () => {
    window.location.href = "tel:+918848683518"; // Replace +1234567890 with your phone number
  };

  const handleEmailButtonClick = () => {
    window.location.href = "mailto:ameensirbay@gmail.com.com"; // Replace example@example.com with your email address
  };
  const handleWhatsAppButtonClick = () => {
    window.location.href =
      "https://wa.me/918848683518/?text=Hello! We're excited to connect with you and provide exceptional service.";
  };
  return (
    <>
      <div className="sec5h1">
        <div className="inh1" data-aos="fade-up">
          <h1>contact us</h1>
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
