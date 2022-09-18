import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";
import { isMobile } from "../../helpers/isMobile";

const PlanosSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={isMobile ? 1 : 4}
        /*   loop={true} */
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ height: "80vh", paddingBottom: 60 }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <SwiperSlide>{n}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PlanosSlider;
