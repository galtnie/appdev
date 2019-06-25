import React from "react";
import FakeText from "../components/FakeText";
import {MainPageDiv, FirstPageContainer } from "../styles";

class Technologies extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstPageContainer>
          Technologies
          <FakeText />
        </FirstPageContainer>
        FOOTER
      </MainPageDiv>
    );
  }
}

export default Technologies;
