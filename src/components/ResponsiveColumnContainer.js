import React from "react";
import { Grid } from "@material-ui/core";

const ResponsiveColumnContainer = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item md={8} xs={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ResponsiveColumnContainer;
