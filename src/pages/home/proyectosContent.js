import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import f1 from "../../assets/f1.jpg";
import f2 from "../../assets/f2.jpg";
import { VicuContext } from "../../context/vicuContext";
import { isMobile } from "../../helpers/isMobile";

const ProyectosContent = () => {
  let navigate = useNavigate();
  return (
    <Grid
      container
      spacing={4}
      style={{
        padding: 20,
        marginTop: -60,
      }}
    >
      {items.map((obj, i) => (
        <Grid
          key={i + 900}
          item
          xs={12}
          md={4}
          onClick={() => navigate("proyecto/" + obj.link)}
        >
          <Imagen img={obj.img} img2={obj.img2} />
          <Typography variant="h3">{obj.title} </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

const Imagen = styled("div")(({ theme, img, img2 }) => ({
  height: isMobile ? "82vw" : "30vw",
  width: isMobile ? "80%" : "auto",
  transition: "0.5s",
  margin: isMobile && "auto",
  background: `url(${img})`,
  cursor: "pointer",
  "&:hover": {
    background: `url(${img2})`,
  },
}));

const items = [
  { link: "casaUno", img: f1, img2: f2, title: "Casa Uno" },
  { link: "casados", img: f2, img2: f1, title: "Terreno Plano" },
  { link: "casauno", img: f1, img2: f2, title: "Casa Uno" },
  { link: "casados", img: f2, img2: f1, title: "Terreno Plano" },
  { link: "casauno", img: f1, img2: f2, title: "Casa Uno" },
  { link: "casados", img: f2, img2: f1, title: "Terreno Plano" },
];

export default ProyectosContent;
