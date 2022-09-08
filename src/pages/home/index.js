import styled from "@emotion/styled";
import { Fade, Typography } from "@mui/material";
import { useContext, useState } from "react";
import HandlerContent from "./handlerContent";
import NavBarHome from "./navBarHome";

import logoH from "../../assets/logo/logoH.png";
import { VicuContext } from "../../context/vicuContext";

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
  else
    return (
      <Fade in={true} timeout={900}>
        <GridForm>
          <Typography variant="h3">INFO@FUCKSMANNROTHMAN.COM</Typography>
          <Typography variant="h3">IG @FUCKSMANNROTHMAN</Typography>
          <Typography variant="h3">
            OMAR CARRASCO 2541, ROSARIO ARGENTINA
          </Typography>
        </GridForm>
      </Fade>
    );
  return (
    <Fade in={true} timeout={1400}>
      <div style={{ height: "100vh", display: "flex", marginTop: 80 }}>
        <section style={{ width: "25%", position: "fixed" }}>
          <NavBarHome />
        </section>
        <div style={{ width: "75%", marginLeft: "25%" }}>
          <HandlerContent />
        </div>
      </div>
    </Fade>
  );
};

const GridForm = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#fff",
}));

const Imagen = styled("img")(({ theme }) => ({
  width: "62%",
  transition: "0.4s",
  cursor: "pointer",

  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export default Home;
