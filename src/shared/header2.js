import {
  AppBar,
  IconButton,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo/logoH.png";
import { useEffect, useState } from "react";

const Header = (props) => {
  const [bgHeader, setBgHeader] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    let event = window.addEventListener("scroll", () => {
      if (window.innerHeight < window.scrollY) setBgHeader(true);
      else setBgHeader(false);
    });

    return () => {
      window.removeEventListener("scroll", event);
    };
  }, []);

  return (
    <HideOnScroll {...props}>
      <AppBar
        elevation={0}
        style={{
          backgroundColor: bgHeader ? "#fff" : "transparent",
          padding: 15,
        }}
      >
        <Toolbar style={{ justifyContent: "space-between", marginRight: 50 }}>
          <img src={logo} alt="logoFR" style={{ height: "2.5vh" }} />
          <IconButton
            size="large"
            edge="start"
            color={bgHeader ? "default" : "inherit"}
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default Header;
