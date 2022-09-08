import { Fade, Grid } from "@mui/material";

const HeaderBody = ({ openHeader }) => {
  return (
    <Fade in={openHeader} timeout={{ enter: 600 }} mountOnEnter unmountOnExit>
      <div
        style={{
          backgroundColor: "green",
          marginTop: 160,
          marginRight: "4vw",
          marginLeft: "4vw",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <div>xs=2</div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Fade>
  );
};

export default HeaderBody;
