import React from "react";
import FakeText from "../components/FakeText";
import { MainPageDiv, FirstPageContainer } from "../styles";

class Portfolio extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstPageContainer>
          Portfolio page
          <FakeText />
        </FirstPageContainer>
      </MainPageDiv>
    );
  }
}

export default Portfolio;
