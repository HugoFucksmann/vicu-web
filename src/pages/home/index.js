import styled from "@emotion/styled";
import { Fade, Grid, Typography } from "@mui/material";
import { useContext, useState } from "react";
import HandlerContent from "./handlerContent";
import NavBarHome from "./navBarHome";

import logoH from "../../assets/logo/logoH.png";
import { VicuContext } from "../../context/vicuContext";
import { isMobile } from "../../helpers/isMobile";

const Home = () => {
  const { ready, setReady } = useContext(VicuContext);

  if (!ready)
    return (
      <GridForm>
        <Imagen
          src={logoH}
          alt="Fucksmann-Rothman"
          onClick={() => setReady(true)}
        />
      </GridForm>
    );

  return (
    <Fade in={true} timeout={1400}>
      <Grid container style={{ padding: isMobile ? 40 : 60 }}>
        <Grid item xs={12} md={3}>
          <NavBarHome />
        </Grid>
        <Grid item xs={12} md={9}>
          <HandlerContent />
        </Grid>
      </Grid>
    </Fade>
  );
};

const GridForm = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
  backgroundColor: "#fff",
  overflow: "hidden",
}));

const Imagen = styled("img")(({ theme }) => ({
  width: isMobile ? "74%" : "52%",
  transition: "0.5s",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export default Home;

/* 
 else
    return (
      <Fade in={true} timeout={1400} delay={800}>
        <GridForm>
          <Typography variant="h3">INFO@FUCKSMANNROTHMAN.COM</Typography>
          <Typography variant="h3">IG @FUCKSMANNROTHMAN</Typography>
          <Typography variant="h3">
            OMAR CARRASCO 2541, ROSARIO ARGENTINA
          </Typography>
        </GridForm>
      </Fade>
    );
     */
