import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withWidth, withStyles, Grid } from "@material-ui/core/";
import { renderEmptyColumns } from "../functions";
import AnimatedMiddleText from "./AnimatedMiddleText.js";
import TechUsedCard from "./TechsUsedCard.js";
import TechsUsedButton from "./TechsUsedButton.js";

const classes = theme => {
  return {
    middleGrid: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "2rem",
      [theme.breakpoints.up("md")]: {
        height: "12rem",
      },
    },
    techsIconsMiddleGrid: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "center",
      flexWrap: "wrap",
      alignContent: "flex-start",
      [theme.breakpoints.up("md")]: {
        height: "29rem",
      },
    },
  };
};

class TechnologiesUsed extends React.Component {
  state = {
    container: null,
    slideIn: false,
  };

  refCallback = element => {
    if (element) {
      this.setState({ container: element });
    }
  };

  componentDidMount() {
    if (this.state.container !== null) {
      window.addEventListener("scroll", () => {
        if (
          this.state.container.getBoundingClientRect().top < window.innerHeight
        ) {
          this.setState({ slideIn: true });
        } else if (
          this.state.container.getBoundingClientRect().top > window.innerHeight
        ) {
          this.setState({ slideIn: false });
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.container !== this.state.container) {
      if (this.state.container !== null) {
        window.addEventListener("scroll", () => {
          if (
            this.state.container.getBoundingClientRect().top <
            window.innerHeight
          ) {
            this.setState({
              slideIn: true,
            });
          } else if (
            this.state.container.getBoundingClientRect().top >
            window.innerHeight
          ) {
            this.setState({
              slideIn: false,
            });
          }
        });
      }
    }
  }

  render() {
    const { width, usedTechnologies, classes } = this.props;
    const smallDevice = width === "sm" || width === "xs";

    return (
      <Fragment>
        {renderEmptyColumns(3)}

        <Grid
          item
          md={6}
          xs={10}
          className={classes.middleGrid}
          style={{ marginTop: smallDevice ? "4rem" : "5rem" }}
        >
          <AnimatedMiddleText title={true} smallDevice={smallDevice}>
            {usedTechnologies.description.title}
          </AnimatedMiddleText>
          <AnimatedMiddleText title={false} smallDevice={smallDevice}>
            {usedTechnologies.description.text}
          </AnimatedMiddleText>
        </Grid>
        {renderEmptyColumns(3)}
        {renderEmptyColumns(2)}
        <Grid item md={8} xs={10} ref={this.refCallback}>
          <div className={classes.techsIconsMiddleGrid}>
            {usedTechnologies
              ? usedTechnologies.list.map((technology, index) => {
                  return (
                    <TechUsedCard
                      logo={technology.logo}
                      name={technology.name}
                      trigger={this.state.slideIn}
                      turn={index}
                      key={technology.name}
                      style={{ width: "33%" }}
                      smallDevice={smallDevice}
                    />
                  );
                })
              : null}
          </div>
        </Grid>
        {renderEmptyColumns(2)}
        <TechsUsedButton smallDevice={smallDevice} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    usedTechnologies: state.usedTechnologies,
  };
};

export default connect(mapStateToProps)(
  withWidth()(withStyles(classes)(TechnologiesUsed))
);
