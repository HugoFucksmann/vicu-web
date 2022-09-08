import { createTheme } from "@mui/material/styles";
import { isMobile } from "../helpers/isMobile";
import nimbusSansLight from "../fonts/Nimbus-Sans-Light.woff";

const appTheme = createTheme({
  typography: {
    fontFamily: "nimbusSansLight",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "nimbusSansLight",
          src: `url(${nimbusSansLight}) format("woff")`,
        },
        body: {
          letterSpacing: 2.8,
        },
      },
    },
  },
});

//*-------- typography-------------------

appTheme.typography.h3 = {
  fontSize: isMobile ? "1rem" : "1.6em",
  lineHeight: isMobile && "36px",
  fontFamily: "nimbusSansLight",
};

//*-------------------------------------------

export default appTheme;
