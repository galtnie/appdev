import React from "react";
import FakeText from "../components/FakeText";
import { MainPageDiv, FirstColorfulContainer } from "../styles";
import ResponsiveColumnContainer from "../components/ResponsiveColumnContainer.js";

class Home extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstColorfulContainer>
          <ResponsiveColumnContainer>
            Home page
            <FakeText />
          </ResponsiveColumnContainer>
        </FirstColorfulContainer>
      </MainPageDiv>
    );
  }
}

export default Home;
