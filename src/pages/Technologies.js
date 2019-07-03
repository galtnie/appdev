import React from "react";
import FakeText from "../components/FakeText";
import TechnologiesUsed from "../components/TechnologiesUsed";
import { MainPageDiv, FirstColorfulContainer } from "../styles";
import ResponsiveColumnContainer from "../components/ResponsiveColumnContainer.js";

class Technologies extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstColorfulContainer>
          <ResponsiveColumnContainer>
            Technologies
            <FakeText />
          </ResponsiveColumnContainer>
        </FirstColorfulContainer>
        <ResponsiveColumnContainer>
          <TechnologiesUsed />
        </ResponsiveColumnContainer>
      </MainPageDiv>
    );
  }
}

export default Technologies;
