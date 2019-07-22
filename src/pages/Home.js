import React from "react";
import { MainPageDiv } from "../styles";
import HomeFirstPage from "../components/HomeFirstPage.js";
import HomeThirdPage from "../components/HomeThirdPage";
import HomeSecondPage from "../components/HomeSecondPage";
import withWidth from "@material-ui/core/withWidth";

class Home extends React.Component {
  state = {
    isUpperPageRendered: true,
  };

  componentDidMount() {
    if (this.props.width !== "sm" && this.props.width !== "xs") {
      window.addEventListener("scroll", () => {
        const totalHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const currentHeight = document.documentElement.scrollTop;
        if (
          currentHeight < totalHeight / 2 &&
          this.state.isUpperPageRendered !== true
        ) {
          this.setState({
            isUpperPageRendered: true,
          });
        } else if (
          currentHeight > totalHeight / 2 &&
          this.state.isUpperPageRendered === true
        ) {
          this.setState({
            isUpperPageRendered: false,
          });
        }
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.width !== this.props.width) {
      if (this.props.width !== "sm" && this.props.width !== "xs") {
        window.addEventListener("scroll", () => {
          const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const currentHeight = document.documentElement.scrollTop;
          if (
            currentHeight < totalHeight / 2 &&
            this.state.isUpperPageRendered !== true
          ) {
            this.setState({
              isUpperPageRendered: true,
            });
          } else if (
            currentHeight > totalHeight / 2 &&
            this.state.isUpperPageRendered === true
          ) {
            this.setState({
              isUpperPageRendered: false,
            });
          }
        });
      }
    }
  }

  render() {
    const smallDevice = this.props.width === "sm" || this.props.width === "xs";
    return (
      <MainPageDiv>
        <HomeFirstPage
          render={smallDevice ? null : this.state.isUpperPageRendered ? 2 : 1}
        />
        <HomeSecondPage />
        <HomeThirdPage
          render={smallDevice ? null : this.state.isUpperPageRendered ? 1 : 2}
        />
      </MainPageDiv>
    );
  }
}

export default withWidth()(Home);
