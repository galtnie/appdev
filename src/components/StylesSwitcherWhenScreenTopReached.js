import React from "react";
import { connect } from "react-redux";
import { changeStylesOnScroll } from "../actions";

class StylesSwitcherWhenScreenTopReached extends React.Component {
  state = {
    container: null,
    ifScreenTopReached: false,
  };

  refCallback = element => {
    if (element) {
      this.setState({ container: element });
    }
  };

  checkCurrentState() {
    if (
      this.state.container.getBoundingClientRect().top <= 0 &&
      this.state.container.getBoundingClientRect().top >
        -1 * (window.innerHeight / 2)
    ) {
      this.props.changeStylesOnScroll(this.props.switchOff);
      this.setState({ ifScreenTopReached: true });
    }
  }

  invokeScrollWatcher() {
    window.addEventListener("scroll", () => {
      if (this.state.container) {
        if (
          this.state.container.getBoundingClientRect().top <= 0 &&
          this.state.container.getBoundingClientRect().top <
            window.innerHeight / 2 &&
          this.state.ifScreenTopReached === false
        ) {
          this.props.changeStylesOnScroll(this.props.switchOn);
          this.setState({ ifScreenTopReached: true });
        } else if (
          this.state.container.getBoundingClientRect().top > 0 &&
          this.state.container.getBoundingClientRect().top >
            -1 * (window.innerHeight / 2) &&
          this.state.ifScreenTopReached === true
        ) {
          this.props.changeStylesOnScroll(this.props.switchOff);
          this.setState({
            ifScreenTopReached: false,
          });
        }
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
      this.checkCurrentState();
      this.invokeScrollWatcher();
    }
  }

  render() {
    return (
      <span
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
)(StylesSwitcherWhenScreenTopReached);
