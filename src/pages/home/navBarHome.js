import { Typography } from "@mui/material";
import { isMobile } from "../../helpers/isMobile";

import logoV from "../../assets/logo/logoV.png";
import logoH from "../../assets/logo/logoH.png";

const NavBarHome = () => {
  return (
    <div
      style={{
        position: !isMobile && "fixed",
        width: isMobile ? "100%" : "25%",
      }}
    >
      <img
        src={isMobile ? logoH : logoV}
        alt="fucksmann-rothman"
        style={{
          width: isMobile ? "100%" : "72%",

          marginBottom: isMobile ? 16 : 60,
          marginTop: 6,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "row" : "column",

          justifyContent: "space-around",
        }}
      >
        {["proyectos", "contactanos", "otros"].map((item) => (
          <Typography
            key={item}
            variant="h3"
            style={{ marginBottom: isMobile ? 26 : 8, cursor: "pointer" }}
          >
            {item}
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default NavBarHome;
