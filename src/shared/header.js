import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Slide } from "@mui/material";

import logo from "../assets/logo/logoV.png";

import { isMobile } from "../helpers/isMobile";
import { useNavigate } from "react-router-dom";

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

const HeaderTrece = (props) => {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [headerBack, setHeaderBack] = React.useState(false);

  React.useEffect(() => {
    let reg = window.addEventListener("scroll", handleScroll);

    //return () => window.removeEventListener(reg);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 60) {
      setHeaderBack(true);
    } else {
      setHeaderBack(false);
    }
  };

  return (
    <HideOnScroll {...props}>
      <AppBar
        elevation={!headerBack ? 0 : 3}
        style={{
          background: !headerBack ? "transparent" : "#fff",

          paddingLeft: !isMobile && 70,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <IconButton
                size="large"
                onClick={() => setAnchorElNav(true)}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <img
              src={props.logo}
              alt="logo"
              style={{ margin: 8, height: isMobile ? 40 : 60 }}
            />
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              {props.title}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "right",
                marginRight: "2vw",
                display: { xs: "none", md: "flex" },
              }}
            >
              {props.pages.map((page) => (
                <Button
                  onClick={() => navigate(page.link)}
                  key={page.link}
                  sx={{
                    marginLeft: 2.4,
                  }}
                >
                  <Typography variant="h5">{page.txt}</Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

HeaderTrece.defaultProps = {
  logo: logo,
  pages: [
    { txt: "Home", link: "" },
    { txt: "Productos", link: "productos" },
    { txt: "Quienes Somos", link: "quienessomos" },
    { txt: "Donde Comprar", link: "dondecomprar" },
    { txt: "Sumate", link: "sumate" },
  ],
};

export default HeaderTrece;
