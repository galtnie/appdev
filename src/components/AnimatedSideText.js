import React, { Fragment, useEffect, useState, useCallback } from "react";
import {
  HomeSlideAppearContainer,
  SideTextButton,
  SideTextButtonWithChangedStyles,
} from "../styles";
import { Typography, withWidth } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
//
//
const classes = theme => {
  return {
    initial: {
      color: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: "0.5rem",
      "&:hover": {
        color: "white",
        backgroundColor: theme.palette.primary.main,
      },
    },
  };
};
//
class Bttn extends React.Component {
  render() {
    const {
      children,
      classes,
      currentStylesSubjectToScroll,
      smallDevice,
    } = this.props;

    return currentStylesSubjectToScroll.backgroundColor === "white" ? (
      <SideTextButton className={classes.initial}>
        <Typography variant={smallDevice ? "body1" : "h6"}>
          {children}
        </Typography>
      </SideTextButton>
    ) : (
      <SideTextButtonWithChangedStyles
        smalldevice={Number(smallDevice)}
        navbarcolor={
          smallDevice ? "white" : currentStylesSubjectToScroll.navbarColor
        }
      >
        <Typography variant={smallDevice ? "body1" : "h6"}>
          {children}
        </Typography>
      </SideTextButtonWithChangedStyles>
    );
  }
}
//
const mapStateToPropsBttn = state => {
  return {
    currentStylesSubjectToScroll: state.currentStylesSubjectToScroll,
  };
};
const StyledBttn = connect(mapStateToPropsBttn)(withStyles(classes)(Bttn));
//
//
class Text extends React.Component {
  render() {
    const { width, serviceList } = this.props;
    const smallDevice = width === "sm" || width === "xs";

    const { fontColor, children } = this.props;
    return (
      <span
        style={{
          color: smallDevice ? (serviceList ? "black" : "white") : fontColor,
        }}
      >
        {children}
      </span>
    );
  }
}
//
const mapStateToPropsText = state => {
  return {
    fontColor: state.currentStylesSubjectToScroll.fontColor,
  };
};
const StyledText = connect(mapStateToPropsText)(withWidth()(Text));
//
//
//
export default ({ title, children, button, smallDevice, serviceList }) => {
  const [container, setContainer] = useState(null);
  const [slideIn, setSlideIn] = useState(false);

  const measuredRef = useCallback(node => {
    setContainer(node);
  }, []);

  useEffect(() => {
    if (container !== null) {
      window.addEventListener("scroll", () => {
        if (container.getBoundingClientRect().bottom < window.innerHeight) {
          setSlideIn(true);
        } else if (
          container.getBoundingClientRect().bottom > window.innerHeight
        ) {
          setSlideIn(false);
        }
      });
    }
  }, [container, slideIn]);

  const renderText = () => {
    return (
      <Fragment>
        <Typography
          variant={smallDevice ? "h6" : "h4"}
          paragraph={true}
          gutterBottom={true}
        >
          <StyledText serviceList={serviceList}>{title}</StyledText>
        </Typography>
        <Typography
          variant={smallDevice ? "body1" : "h6"}
          paragraph={true}
          gutterBottom={true}
          style={{
            fontWeight: "100",
          }}
        >
          <StyledText serviceList={serviceList}>{children}</StyledText>
        </Typography>
        <StyledBttn smallDevice={smallDevice}> {button} </StyledBttn>
      </Fragment>
    );
  };
  return (
    <div
      ref={measuredRef}
      style={{
        marginBottom: smallDevice ? "2.5rem" : "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: smallDevice ? "center" : "flex-start",
      }}
    >
      {smallDevice ? (
        renderText()
      ) : (
        <HomeSlideAppearContainer trigger={slideIn}>
          {renderText()}
        </HomeSlideAppearContainer>
      )}
    </div>
  );
};
