import React from "react";
import { connect } from "react-redux";
import { changeStylesOnScroll } from "../actions";

class StylesSwitcherWhenContainerViewed extends React.Component {
  state = {
    container: null,
    viewed: false,
  };

  refCallback = element => {
    if (element) {
      this.setState({ container: element });
    }
  };

  checkCurrentState() {
    if (
      this.state.container.getBoundingClientRect().top > 0 &&
      this.state.container.getBoundingClientRect().top < window.innerHeight / 2
    ) {
      this.props.changeStylesOnScroll(this.props.seen);
      this.setState({ viewed: true });
    }
  }

  invokeScrollWatcher() {
    window.addEventListener("scroll", () => {
      if (
        this.state.container.getBoundingClientRect().top > 0 &&
        this.state.container.getBoundingClientRect().top <
          window.innerHeight / 2 &&
        this.state.viewed === false
      ) {
        if (
          this.props.seen &&
          this.props.currentStylesSubjectToScroll.backgroundColor !==
            this.props.seen.backgroundColor
        ) {
          this.props.changeStylesOnScroll(this.props.seen);
        }
        this.setState({ viewed: true });
      } else if (
        this.state.container.getBoundingClientRect().bottom < 0 &&
        this.state.viewed === true
      ) {
        if (
          this.props.above &&
          this.props.currentStylesSubjectToScroll.backgroundColor !==
            this.props.above.backgroundColor
        ) {
          this.props.changeStylesOnScroll(this.props.above);
        }
        this.setState({ viewed: false });
      } else if (
        this.state.container.getBoundingClientRect().top >
          window.innerHeight / 2 &&
        this.state.viewed === true
      ) {
        if (
          this.props.below &&
          this.props.currentStylesSubjectToScroll.backgroundColor !==
            this.props.below.backgroundColor
        ) {
          this.props.changeStylesOnScroll(this.props.below);
        }
        this.setState({ viewed: false });
      }
    });
  }

  componentDidMount() {
    if (this.state.container) {
      this.checkCurrentState();
      this.invokeScrollWatcher();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.container !== this.state.container) {
      if (this.state.container) {
        this.checkCurrentState();
        this.invokeScrollWatcher();
      }
    }
  }

  render() {
    return (
      <div
        ref={this.refCallback}
        style={{
          width: "100%",
          height: this.props.height ? this.props.height : "1px",
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentStylesSubjectToScroll: state.currentStylesSubjectToScroll,
  };
};

export default connect(
  mapStateToProps,
  { changeStylesOnScroll }
)(StylesSwitcherWhenContainerViewed);
