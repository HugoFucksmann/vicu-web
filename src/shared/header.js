import {
  AppBar,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = (props) => {
  const { openHeader, setOpenHeader } = props;
  return (
    <HideOnScroll {...props}>
      <AppBar
        elevation={0}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Toolbar style={{ justifyContent: "space-between", marginRight: 50 }}>
          <Typography variant="h6" component="div">
            Scroll to hide App bar
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenHeader(!openHeader)}
          >
            {openHeader ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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
