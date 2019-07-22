import React from "react";
import { Grid, Hidden } from "@material-ui/core";

export const renderEmptyColumns = (number, key = null) => {
  return key === null ? (
    <Hidden smDown>
      <Grid item md={number} />
    </Hidden>
  ) : (
    <Hidden smDown key={key}>
      <Grid item md={number} />
    </Hidden>
  );
};
