import React from "react";
import { HomeSecondContainer } from "../styles";
import { Grid } from "@material-ui/core";
import OurServices from "../components/OurServices.js";
import TechnologiesUsed from "../components/TechnologiesUsed";
import OurPartners from "../components/OurPartners";
import StylesSwitcherWhenScreenTopReached from "../components/StylesSwitcherWhenScreenTopReached";
import { connect } from "react-redux";
import { withWidth } from "@material-ui/core";

class HomeSecondPage extends React.Component {
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
    const { width } = this.props;
    const smallDevice = width === "sm" || width === "xs";

    return (
      <HomeSecondContainer smalldevice={Number(smallDevice)}>
        <OurServices />

        <div style={{ backgroundColor: "white" }}>
          <Grid container justify="center" alignItems="center">
            <StylesSwitcherWhenScreenTopReached
              height={smallDevice ? "1px" : "6rem"}
              switchOnNavbarColor={
                this.props.onScrollStyles.serviceList.navbarColor
              }
              switchOffNavbarColor={
                this.props.onScrollStyles.serviceList.initial
              }
              switchOn={this.props.onScrollStyles.serviceList}
              switchOff={this.props.onScrollStyles.projectList[2]}
            />
            <TechnologiesUsed />
          </Grid>
          <div style={{ backgroundColor: "#eeeeee" }}>
            <Grid container justify="center" alignItems="center">
              <OurPartners />
            </Grid>
          </div>
        </div>
      </HomeSecondContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentStylesSubjectToScroll: state.currentStylesSubjectToScroll,
    onScrollStyles: state.onScrollStyles,
  };
};

export default connect(mapStateToProps)(withWidth()(HomeSecondPage));
