import React from "react";
import { Grid } from "@mui/material";
import RightSideContent from "./Rightsidebody/RightSideContent";
import LeftSideContent from "./LeftSidebody/LeftSideContent";

const ProductContent = () => {
  return (
    <Grid sx={{ mt: "20px" }}>
      <Grid container>
        <Grid size={{ xs: 0, sm: 0, md: 0.9 }}></Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2.5 }}>
          {/* LeftSideContent */}
          <LeftSideContent />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 8 }}>
          {/* RightSideContent */}
          <RightSideContent />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ProductContent;
