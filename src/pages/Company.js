import React from "react";
import FakeText from "../components/FakeText";
import { MainPageDiv, FirstPageContainer } from "../styles";

class Company extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstPageContainer>
          Company page
          <FakeText />
        </FirstPageContainer>
      </MainPageDiv>
    );
  }
}

export default Company;
