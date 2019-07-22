import React from "react";
import FakeText from "../components/FakeText";
import { MainPageDiv, FirstColorfulContainer } from "../styles";
import ResponsiveColumnContainer from "../components/ResponsiveColumnContainer.js";

class Company extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstColorfulContainer>
          <ResponsiveColumnContainer style={{ marginTop: "10rem" }}>
            Company page
            <FakeText />
          </ResponsiveColumnContainer>
        </FirstColorfulContainer>
      </MainPageDiv>
    );
  }
}

export default Company;
