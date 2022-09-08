import React from "react";
import appTheme from "./theme/appTheme";
import { ThemeProvider } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import VicuProvider from "./context/vicuContext";
import { CssBaseline } from "@mui/material";

import ProyectPage from "./pages/proyect";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <VicuProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyecto/:id" element={<ProyectPage />} />
          </Routes>
        </BrowserRouter>
      </VicuProvider>
    </ThemeProvider>
  );
}

export default App;
/* 
import Home from "./pages/home";

import styled from "@emotion/styled";

function App() {
  const [inicio, setInicio] = useState(true);

  if (inicio)
    return (
      <GridForm>
        <img src={logoH} alt="Fucksmann-Rothman" style={styles.logo} />
      </GridForm>
    );

  return <Home />;
}

const GridForm = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
}));

const styles = {
  containerInicio: {},
  logo: {
    width: "62%",
    transition: "0.4s",
    transform: "scale(1.1)",
    "&:hover": {},
  },
};

export default App;
 */
