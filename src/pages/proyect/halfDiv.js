import { Grid, Typography } from "@mui/material";

const HalfDiv = ({ data }) => {
  return data.map((obj, i) => (
    <Grid container key={i + 120}>
      {i % 2 === 0 ? (
        <>
          <HallfImg img={obj.img} />
          <HallfTxt txt={obj.txt} />
        </>
      ) : (
        <>
          <HallfTxt txt={obj.txt} />
          <HallfImg img={obj.img} />
        </>
      )}
    </Grid>
  ));
};

const HallfImg = ({ img }) => {
  return (
    <Grid item xs={12} md={6} style={{ paddingLeft: "8%", marginTop: "-4%" }}>
      <img src={img} style={{ width: "90%", margin: "auto" }} />
    </Grid>
  );
};

const HallfTxt = ({ txt }) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" style={{ width: "60%" }}>
        {txt}
      </Typography>
    </Grid>
  );
};

const DataText = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel erat ac dolor mattis sodales. 
Pellentesque laoreet bibendum velit, eget varius lacus interdum nec. Proin interdum vitae sem vel semper. 
Nunc a lorem sapien. Morbi tempor est libero, vestibulum porttitor massa commodo et. Ut a felis facilisis, 
pellentesque dui ornare, malesuada ligula. Aenean at dignissim nibh, a semper tellus. Nam porttitor eros vel 
metus hendrerit, quis vestibulum ex porta. Morbi non sagittis odio. Nullam convallis bibendum magna ac faucibus`;

export default HalfDiv;
