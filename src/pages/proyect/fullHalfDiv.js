import { Grid, Typography } from "@mui/material";
import f1 from "../../assets/d1.jpg";
const FullHalfDiv = ({ data }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <img
          src={data.img}
          style={{ height: "100vh", width: "100%", margin: "auto" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f2f2f2",
        }}
      >
        <Typography variant="h5" style={{ width: "60%" }}>
          {data.title}
        </Typography>
      </Grid>
    </Grid>
  );
};

const DataText = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel erat ac dolor mattis sodales. 
Pellentesque laoreet bibendum velit, eget varius lacus interdum nec. Proin interdum vitae sem vel semper. 
Nunc a lorem sapien. Morbi tempor est libero, vestibulum porttitor massa commodo et. Ut a felis facilisis, 
pellentesque dui ornare, malesuada ligula. Aenean at dignissim nibh, a semper tellus. Nam porttitor eros vel 
metus hendrerit, quis vestibulum ex porta. Morbi non sagittis odio. Nullam convallis bibendum magna ac faucibus`;

export default FullHalfDiv;
