import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Grid, withStyles, withWidth } from "@material-ui/core";
import { renderEmptyColumns } from "../functions";
import AnimatedMiddleText from "./AnimatedMiddleText.js";
import ServicesList from "./ServicesList";
import ProjectList from "./ProjectList";
import StylesSwitcherWhenScreenTopReached from "./StylesSwitcherWhenScreenTopReached";

const classes = theme => {
  return {
    middleGrid: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "2rem",
      [theme.breakpoints.up("md")]: {
        height: "10rem",
      },
    },
  };
};

class OurServices extends React.Component {
  state = {
    onScrollBackgroundColor: "white",
  };

  componentDidMount() {
    if (
      this.state.onScrollBackgroundColor !==
      this.props.currentStylesSubjectToScroll.backgroundColor
    )
      this.setState({
        onScrollBackgroundColor: this.props.currentStylesSubjectToScroll
          .backgroundColor,
      });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentStylesSubjectToScroll.backgroundColor !==
      this.props.currentStylesSubjectToScroll.backgroundColor
    )
      this.setState({
        onScrollBackgroundColor: this.props.currentStylesSubjectToScroll
          .backgroundColor,
      });
  }

  render() {
    const { width, classes } = this.props;
    const smallDevice = width === "sm" || width === "xs";

    return (
      <Fragment>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{
            background: smallDevice
              ? "white"
              : this.state.onScrollBackgroundColor,
          }}
        >
          <StylesSwitcherWhenScreenTopReached
            height="6rem"
            switchOnNavbarColor={
              this.props.onScrollStyles.serviceList.navbarColor
            }
            switchOffNavbarColor={this.props.onScrollStyles.serviceList.initial}
            switchOn={this.props.onScrollStyles.serviceList}
            switchOff={this.props.onScrollStyles.initial}
          />
          {renderEmptyColumns(3)}
          <Grid item md={6} xs={10} className={classes.middleGrid}>
            <AnimatedMiddleText title={true} smallDevice={smallDevice}>
              OUR SERVICES
            </AnimatedMiddleText>
            <AnimatedMiddleText title={false} smallDevice={smallDevice}>
              We offer the integrated package of development services for the
              web and mobile usage. We have all the competence and experience to
              create outstanding products.
            </AnimatedMiddleText>
          </Grid>
          {renderEmptyColumns(3)}

          <ServicesList />
          {!smallDevice ? (
            <ProjectList previousComponent={"serviceList"} />
          ) : null}
        </Grid>
        {smallDevice ? <ProjectList previousComponent={"serviceList"} /> : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    projectList: state.projectList,
    serviceList: state.serviceList,
    onScrollStyles: state.onScrollStyles,
    currentStylesSubjectToScroll: state.currentStylesSubjectToScroll,
  };
};
export default connect(mapStateToProps)(
  withWidth()(withStyles(classes)(OurServices))
);
