import React from "react";
import FakeText from "../components/FakeText";
import { MainPageDiv, FirstPageContainer } from "../styles";

class Services extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstPageContainer>
          Services page
          <FakeText />
        </FirstPageContainer>
      </MainPageDiv>
    );
  }
}

export default Services;
