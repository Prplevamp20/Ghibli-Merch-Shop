import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageCarousel.css"; // Make sure this file exists!

function ImageCarousel() {
  const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
    "/images/banner3.jpg"
  ];

  const settings = {
    dots: true,             
    infinite: true,         
    speed: 800,             
    slidesToShow: 1,        
    slidesToScroll: 1,      
    autoplay: true,         
    autoplaySpeed: 3000,    
    arrows: false,          
    fade: true              
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
