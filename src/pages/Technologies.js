import React from "react";
import FakeText from "../components/FakeText";
import TechnologiesUsed from "../components/TechnologiesUsed";
import { MainPageDiv, FirstPageContainer } from "../styles";

class Technologies extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstPageContainer>
          Technologies
          <FakeText />
        </FirstPageContainer>
        <TechnologiesUsed />
      </MainPageDiv>
    );
  }
}

export default Technologies;
