import { Typography } from "@mui/material";
import logoV from "../../assets/logo/logoV.png";

const NavBarHome = () => {
  return (
    <div
      style={{
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        paddingLeft: 40,
      }}
    >
      <img
        src={logoV}
        alt="fucksmann-rothman"
        style={{ width: "64%", marginBottom: 60 }}
      />
      {["proyectos", "contactanos", "otros"].map((item) => (
        <Typography key={item} variant="h2" style={{ marginBottom: 6 }}>
          {item}
        </Typography>
      ))}
    </div>
  );
};

export default NavBarHome;
