import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css"; // Import Swiper styles

// ✅ Correct image imports (Fixes "require is not defined" issue)
import spiritedAway from "../assets/spirited.jpg";
import totoro from "../assets/totoro1.jpg";
import princessMononoke from "../assets/princess.jpg";
import howl from "../assets/howl.jpg";
import kiki from "../assets/kiki.jpg";
import windRises from "../assets/windrises.jpg";

const movieData = [
  { title: "Spirited Away", image: spiritedAway },
  { title: "My Neighbor Totoro", image: totoro },
  { title: "Princess Mononoke", image: princessMononoke },
  { title: "Howl's Moving Castle", image: howl },
  { title: "Kiki's Delivery Service", image: kiki },
  { title: "The Wind Rises", image: windRises },
];

const SwiperComponent = () => {
  return (
    <div className="swiper-container">
      <h2 className="swiper-heading">Discover Movie Magic – Shop Your Favorite Merch!</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // Adjust visibility
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="swiper"
      >
        {movieData.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-card">
              <img src={movie.image} alt={movie.title} className="swiper-image" />
              <div className="swiper-overlay">
                <h3 className="swiper-title">{movie.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
