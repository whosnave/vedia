import React, { useEffect, useState, useRef } from "react";
import "../Content-2/Content-2.css";
import Vab from "../Content-2/vedia.png";

function Content2() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = contentRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={contentRef}
      className={`content-container ${isVisible ? "fade-in" : ""}`}
    >
      <div className="content-wrapper">
        <p className="abtUs">
          <span className="atsAb">About Us Welcome to VEDIA!</span>
          <br />
          <br />
          At VEDIA, we are passionate about providing you with an exceptional
          online shopping experience focused on luxury watches. As a premier
          eCommerce platform, we offer a curated selection of exquisite
          timepieces, ranging from classic designs to modern innovations, all at
          competitive prices.
          <br />
          <br />
          Our mission is straightforward: to make your journey in finding the
          perfect watch seamless and enjoyable. We understand that selecting a
          watch is a significant decision, which is why we’ve carefully chosen a
          diverse collection that caters to every style and occasion.
          <br />
          <br />
          Thank you for choosing VEDIA as your trusted destination for fine
          watches. We look forward to helping you discover the timepiece that
          reflects your unique style and personality! --- This version
          emphasizes the focus on watches and enhances the appeal for watch
          enthusiasts.
        </p>
        <img className="vabImage" src={Vab} alt="VEDIA" />
      </div>
    </div>
  );
}

export default Content2;
