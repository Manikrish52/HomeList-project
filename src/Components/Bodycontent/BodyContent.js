import React from "react";
import { Grid } from "@mui/material";
import LeftSideBodyContent from "./LeftSideBodyContent";
import RightSideBodyContent from "./Rightsidebody/RightSideBodyContent";

const BodyContent = () => {
  return (
    <Grid sx={{ mt: "20px" }}>
      <Grid container>
        <Grid size={{ xs: 0, sm: 0, md: 0.9 }}></Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2.5 }}>
          <LeftSideBodyContent />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 8 }}>
          <RightSideBodyContent />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default BodyContent;
