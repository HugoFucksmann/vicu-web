import { Fade, Typography } from "@mui/material";
import { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../../assets/f1.jpg";

const Slider = ({ data }) => {
  return (
    <Fade in={true} timeout={{ enter: 600 }} mountOnEnter unmountOnExit>
      <div style={{ minHeight: "100vh" }}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Autoplay, EffectFade, Navigation]}
          className="mySwiper"
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
        >
          {data.map((dat) => (
            <SwiperSlide key={dat.title}>
              <img src={dat.img} width={"100%"} />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  padding: "6px 8%",
                  bottom: "15%",
                  width: "100%",
                  /* backgroundColor: "rgba(255,255,255,0.3)", */
                  color: "#f2f2f2",
                }}
              >
                <Typography variant="h4">{dat.title}</Typography>
                <Typography variant="h5">{dat.subtitle}</Typography>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fade>
  );
};

export default Slider;
