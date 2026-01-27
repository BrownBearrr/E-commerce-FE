import React from "react";
import HeroImg from "../../assets/img/hero-img.png";
import "./HeroSection.css" ;
import "../../App.css"
const HeroSection = () => {
  return (
    <>
      <div className="hero_Section">
        <div className="container">
          <div className="left_hero_Section">
            <div className="left_hero_small">T-Shirt/Top</div>
            <div className="left_hero_big">Summer Value Pack</div>
            <div className="left_hero_small">cool/colorful/comfy</div>
            <button className="button_hero">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
