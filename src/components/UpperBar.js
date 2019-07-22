import React, { Fragment } from "react";
import {
  withStyles,
  withWidth,
  AppBar,
  Toolbar,
  Grid,
  Hidden,
  Typography,
} from "@material-ui/core/";
import { connect } from "react-redux";
import { UpperBarList, UpperBarItem, StyledLink } from "../styles";
import BurgerButton from "./UpperBarBurgerButton";
import BurgerMenu from "./UpperBarBurgerMenu";
import Logo from "./Logo";
import { changeStylesOnScroll } from "../actions";

const classes = {
  root: {
    width: "100%",
    maxWidth: "100%",
    boxShadow: "none",
  },
  bar: {
    padding: 0,
  },
  title: {
    flexGrow: 1,
  },
};

class UpperBar extends React.Component {
  state = {
    transparentNavbarStyles: {
      navbarColor: "transparent",
      backgroundColor: "white",
      fontColor: "black",
    },
    defaultStyles: {
      navbarColor: "rgba(103, 58, 183, 0.7)",
      backgroundColor: "white",
      fontColor: "black",
    },
  };

  listenScrollEvent = e => {
    if (
      window.scrollY > 0 &&
      this.props.currentStylesSubjectToScroll.navbarColor === "transparent"
    ) {
      this.props.changeStylesOnScroll(this.state.defaultStyles);
    } else if (window.scrollY === 0) {
      this.props.changeStylesOnScroll(this.state.transparentNavbarStyles);
    }
  };

  componentDidMount() {
    if (
      (this.props.width === "sm" || this.props.width === "xs") &&
      window.scrollY < window.innerHeight &&
      this.props.currentStylesSubjectToScroll.navbarColor !==
        this.state.defaultStyles.navbarColor
    ) {
      this.props.changeStylesOnScroll(this.state.defaultStyles);
    } else if (window.scrollY === 0) {
      this.props.changeStylesOnScroll(this.state.transparentNavbarStyles);
      window.addEventListener("scroll", this.listenScrollEvent);
    } else {
      window.addEventListener("scroll", this.listenScrollEvent);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      if (
        (this.props.width === "sm" || this.props.width === "xs") &&
        window.scrollY < window.innerHeight
      ) {
        this.props.changeStylesOnScroll(this.state.defaultStyles);
      } else if (window.scrollY === 0) {
        this.props.changeStylesOnScroll(this.state.transparentNavbarStyles);
        window.addEventListener("scroll", this.listenScrollEvent);
      } else {
        window.addEventListener("scroll", this.listenScrollEvent);
      }
    }
  }

  render() {
    const {
      currentStylesSubjectToScroll,
      classes,
      navigationOptions,
      width,
    } = this.props;

    return (
      <AppBar
        position="fixed"
        className={classes.root}
        style={{
          backgroundColor:
            currentStylesSubjectToScroll.navbarColor ===
              this.state.transparentNavbarStyles.navbarColor &&
            (width === "sm" || width === "xs")
              ? this.state.defaultStyles.navbarColor
              : currentStylesSubjectToScroll.navbarColor,
        }}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={10}>
            <Toolbar className={classes.bar}>
              <div className={classes.title}>
                <Logo />
              </div>
              {navigationOptions && (
                <Fragment>
                  <Hidden xsDown>
                    <UpperBarList>
                      {navigationOptions.map((listItem, index) => {
                        const option =
                          typeof listItem === "string" ? listItem : listItem[0];
                        const link =
                          option !== "Contact us"
                            ? option.toLowerCase()
                            : "contacts";

                        return (
                          <UpperBarItem
                            key={option}
                            last={navigationOptions.length === index + 1}
                          >
                            <StyledLink
                              exact
                              activeClassName="selectedLink"
                              to={`/${link}`}
                            >
                              <Typography variant="h6">{option}</Typography>
                            </StyledLink>
                          </UpperBarItem>
                        );
                      })}
                    </UpperBarList>
                  </Hidden>
                  <Hidden smUp>
                    <BurgerButton />
                  </Hidden>
                </Fragment>
              )}
            </Toolbar>
            <Hidden smUp>
              <BurgerMenu />
            </Hidden>
          </Grid>
        </Grid>
      </AppBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationOptions: state.navigationOptions,
    currentStylesSubjectToScroll: state.currentStylesSubjectToScroll,
  };
};

export default connect(
  mapStateToProps,
  { changeStylesOnScroll }
)(withWidth()(withStyles(classes)(UpperBar)));
