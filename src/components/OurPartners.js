import React, { Fragment } from "react";
import { withWidth, withStyles, Grid } from "@material-ui/core/";
import { renderEmptyColumns } from "../functions";
import AnimatedMiddleText from "./AnimatedMiddleText";
import PartnerLogoLinks from "./PartnerLogoLinks";

const classes = theme => {
  return {
    upperGrid: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",

      [theme.breakpoints.up("md")]: {
        height: "10rem",
        marginTop: "5rem",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "8rem",
      },
    },
    lowerGrid: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",

      [theme.breakpoints.up("md")]: {
        height: "10rem",
        marginTop: "5rem",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: 0,
      },
    },
  };
};

export default withWidth()(
  withStyles(classes)(({ classes, width }) => {
    const smallDevice = width === "sm" || width === "xs";

    return (
      <Fragment>
        {renderEmptyColumns(3)}
        <Grid item md={6} xs={8} className={classes.upperGrid}>
          <AnimatedMiddleText title={true} smallDevice={smallDevice}>
            OUR PARTNERS
          </AnimatedMiddleText>
          <AnimatedMiddleText title={false} smallDevice={smallDevice}>
            We are proud to collaborate with following industry leaders.
          </AnimatedMiddleText>
        </Grid>
        {renderEmptyColumns(3)}
        {renderEmptyColumns(3)}
        <Grid item md={6} xs={10} className={classes.lowerGrid}>
          <PartnerLogoLinks />
        </Grid>
        {renderEmptyColumns(3)}
      </Fragment>
    );
  })
);
