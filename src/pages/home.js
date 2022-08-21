import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "./home.css";

// import required modules
import { EffectCreative, Pagination } from "swiper";
import Header from "../shared/header";
import Fade from "@mui/material/Fade";

export default function Home() {
  const [openHeader, setOpenHeader] = useState(false);
  return (
    <>
      <Header openHeader={openHeader} setOpenHeader={setOpenHeader} />
      {openHeader ? (
        <HeaderBody openHeader={openHeader} />
      ) : (
        <HomeBody openHeader={openHeader} />
      )}
    </>
  );
}

const HomeBody = ({ openHeader }) => {
  return (
    <Fade in={!openHeader} timeout={{ enter: 600 }} mountOnEnter unmountOnExit>
      <div style={{ minHeight: "100vh" }}>
        <Swiper
          loop={true}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Pagination]}
          pagination={true}
          className="mySwiper3"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </Fade>
  );
};

const HeaderBody = ({ openHeader }) => {
  return (
    <Fade in={openHeader} timeout={{ enter: 600 }} mountOnEnter unmountOnExit>
      <div>HEADER BODY</div>
    </Fade>
  );
};
