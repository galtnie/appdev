import React, { Fragment } from "react";
import {
  withStyles,
  withWidth,
  AppBar,
  Toolbar,
  Grid,
  Hidden,
} from "@material-ui/core/";
import { connect } from "react-redux";
import { UpperBarList, UpperBarItem, StyledLink } from "../styles";
import BurgerButton from "./UpperBarBurgerButton";
import BurgerMenu from "./UpperBarBurgerMenu";
import Logo from "./Logo";

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
    backgroundColor: "transparent",
  };

  listenScrollEvent = e => {
    if (window.scrollY > 0) {
      this.setState({ backgroundColor: "rgba(103, 58, 183, 0.7)" });
    } else {
      this.setState({ backgroundColor: "transparent" });
    }
  };

  componentDidMount() {
    if (this.props.width === "sm" || this.props.width === "xs") {
      this.setState({ backgroundColor: "rgba(103, 58, 183, 0.7)" });
    } else if (window.scrollY === 0) {
      this.setState({ backgroundColor: "transparent" });
      window.addEventListener("scroll", this.listenScrollEvent);
    } else {
      window.addEventListener("scroll", this.listenScrollEvent);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      if (this.props.width === "sm" || this.props.width === "xs") {
        this.setState({ backgroundColor: "rgba(103, 58, 183, 0.7)" });
      } else if (window.scrollY === 0) {
        this.setState({ backgroundColor: "transparent" });
        window.addEventListener("scroll", this.listenScrollEvent);
      } else {
        window.addEventListener("scroll", this.listenScrollEvent);
      }
    }
  }

  render() {
    const { classes, navigationOptions } = this.props;

    return (
      <AppBar
        position="fixed"
        className={classes.root}
        style={{
          backgroundColor: this.state.backgroundColor,
        }}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item md={8} xs={10}>
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
                              {option}
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
  };
};

export default connect(mapStateToProps)(
  withWidth()(withStyles(classes)(UpperBar))
);
