import React from "react";
import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Grid
      sx={{
        height: "90px",
        backgroundColor: "#376EC8",
        paddingLeft: { xs: "0px", md: "5.5%", lg: "7.8%" },
        paddingTop: "18px",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          padding: "0px",
        }}
      >
        Men's wear
      </Typography>
      <Grid sx={{ padding: "0px" }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="›"
          sx={{ fontSize: "13px", color: "#e1d9d9", fontWeight: 600 }}
        >
          <Link underline="hover" href="/" color="inherit">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography
            sx={{
              color: "white",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            Data
          </Typography>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};
export default NavBar;
