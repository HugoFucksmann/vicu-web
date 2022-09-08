import { Fade } from "@mui/material";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";

import { VicuContext } from "../../context/vicuContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "./slider.css";

const ProyectPage = () => {
  const { handlerConProyect, proyecto } = useContext(VicuContext);

  useEffect(() => {
    handlerConProyect();
  }, []);

  if (!proyecto) return <>Loading...</>;

  return (
    <>
      <Slider data={proyecto.slider} />
    </>
  );
};

const Slider = ({ data }) => {
  return (
    <Fade in={true} timeout={{ enter: 600 }} mountOnEnter unmountOnExit>
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
          {data.map((dat) => (
            <SwiperSlide key={dat.title}> {dat.title} </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fade>
  );
};

export default ProyectPage;
