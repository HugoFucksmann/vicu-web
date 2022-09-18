import { useContext, useEffect } from "react";

import { VicuContext } from "../../context/vicuContext";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "./slider.css";
import Slider from "./slider";
import HalfDiv from "./halfDiv";
import FullHalfDiv from "./fullHalfDiv";
import Header from "../../shared/header2";
import PlanosSlider from "./planosSlider";

const ProyectPage = () => {
  const { handlerConProyect, proyecto } = useContext(VicuContext);

  useEffect(() => {
    handlerConProyect();
  }, []);

  if (!proyecto) return <>Loading...</>;

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Header />
      <Slider data={proyecto.slider} />
      <div style={{ height: "32vh" }} />
      <HalfDiv data={proyecto.comboDiv} />
      <div style={{ height: 200 }} />
      <PlanosSlider />
      <div style={{ height: 200 }} />
      <FullHalfDiv data={proyecto.nextProyect} />
    </div>
  );
};

export default ProyectPage;
