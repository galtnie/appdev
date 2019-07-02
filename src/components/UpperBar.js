import React, { Fragment, useState, useEffect } from "react";
import {
  withStyles,
  withWidth,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Hidden,
} from "@material-ui/core/";
import { connect } from "react-redux";
import { UpperBarList, UpperBarItem, StyledLink } from "../styles";
import Burger from "./UpperBarBurgerMenu";

const classes = {
  root: {
    width: "100%",
    maxWidth: "100%",
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
  },
};

const UpperBar = ({ appBarOptions, classes, width }) => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const listenScrollEvent = e => {
    if (window.scrollY > 0) {
      setBackgroundColor("rgba(103, 58, 183, 0.7)");
    } else {
      setBackgroundColor("transparent");
    }
  };

  useEffect(() => {
    if (width === "sm" || width === "xs") {
      setBackgroundColor("rgba(103, 58, 183, 0.7)");
    } else if (window.scrollY === 0) {
      setBackgroundColor("transparent");
      window.addEventListener("scroll", listenScrollEvent);
    } else {
      window.addEventListener("scroll", listenScrollEvent);
    }
  }, [width]);

  return (
    <AppBar
      position="fixed"
      className={classes.root}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item lg={8} md={9} xs={12}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <StyledLink main="true" exact to="/">
                AppDev
              </StyledLink>
            </Typography>

            {appBarOptions && (
              <Fragment>
                <Hidden xsDown>
                  <UpperBarList>
                    {appBarOptions.map((listItem, index) => {
                      const link =
                        listItem !== "Contact us"
                          ? listItem.toLowerCase()
                          : "contacts";
                      return (
                        <UpperBarItem
                          key={listItem}
                          last={appBarOptions.length === index + 1}
                        >
                          <StyledLink
                            exact
                            activeClassName="selectedLink"
                            to={`/${link}`}
                          >
                            {listItem}
                          </StyledLink>
                        </UpperBarItem>
                      );
                    })}
                  </UpperBarList>
                </Hidden>
                <Hidden smUp>
                  <Burger />
                </Hidden>
              </Fragment>
            )}
          </Toolbar>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const mapStateToProps = state => {
  return {
    appBarOptions: state.appBarOptions,
  };
};

export default connect(mapStateToProps)(
  withWidth()(withStyles(classes)(UpperBar))
);
