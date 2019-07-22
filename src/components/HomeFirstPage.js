import React from "react";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  withStyles,
  withWidth,
  Hidden,
} from "@material-ui/core";
import {
  FirstColorfulContainer,
  HomeColorfulContainerImage,
  HomeColorfulContainerBottom,
  AnimatedScrollDiv,
  AnimatedPolyline,
} from "../styles";
//
//
//
const classes = theme => {
  return {
    button: {
      marginTop: "10%",
      color: theme.palette.secondary.main,
      backgroundColor: "white",
      border: "2px solid white",
      "&:hover": {
        color: "white",
        backgroundColor: theme.palette.secondary.main,
      },
    },
    mainGrid: {
      height: "100%",
    },
    leftGrid: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
        textAlign: "center",
      },
    },
    rightGrid: { height: "100%", position: "relative" },
  };
};

class HomeFirstPage extends React.Component {
  render() {
    const { classes, render, width } = this.props;
    const home = this.props.firstPageData.home;
    const smallDevice = width === "sm" || width === "xs";

    return (
      <FirstColorfulContainer
        style={{
          zIndex: smallDevice ? 1 : render ? 2 : 1,
          position: smallDevice ? "static" : "fixed",
        }}
      >
        <Grid
          container
          justify={smallDevice ? "center" : "flex-start"}
          alignItems={smallDevice ? "center" : "flex-start"}
          className={classes.mainGrid}
        >
          <Hidden smDown>
            <Grid item md={1} />
          </Hidden>
          <Grid item md={4} xs={8} className={classes.leftGrid}>
            <Typography
              variant={smallDevice ? "h6" : "h4"}
              paragraph={true}
              gutterBottom={true}
            >
              {smallDevice ? home.text.toUpperCase() : home.text}
            </Typography>
            {smallDevice ? (
              <HomeColorfulContainerImage
                src={home.mobileImg}
                alt={"smth"}
                smallDevice={smallDevice}
              />
            ) : null}
            <Button className={classes.button} size="large" variant="outlined">
              {home.button}
            </Button>
          </Grid>
          {smallDevice ? null : (
            <Grid item md={6} className={classes.rightGrid}>
              <HomeColorfulContainerImage
                src={home.desktopImg}
                alt={"smth"}
                smallDevice={smallDevice}
              />
              <HomeColorfulContainerBottom>
                <ArrowDown />
                <ScrollDiv />
              </HomeColorfulContainerBottom>
            </Grid>
          )}
          <Hidden smDown>
            <Grid item md={1} />
          </Hidden>
        </Grid>
      </FirstColorfulContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstPageData: state.firstPageData,
  };
};

export default connect(mapStateToProps)(
  withWidth()(withStyles(classes)(HomeFirstPage))
);

const ScrollDiv = () => {
  return (
    <AnimatedScrollDiv>
      <Typography
        variant="h6"
        paragraph={true}
        gutterBottom={true}
        style={{ color: "rgba(255, 255, 255, 0.8)" }}
      >
        SCROLL
      </Typography>
    </AnimatedScrollDiv>
  );
};

const ArrowDown = () => {
  return (
    <svg height="50" width="60">
      <AnimatedPolyline points="0,0 30,25 60,0" />
    </svg>
  );
};
