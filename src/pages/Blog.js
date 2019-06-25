import React from "react";
import FakeText from "../components/FakeText";
import { MainPageDiv, FirstPageContainer } from "../styles";

class Blog extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstPageContainer>
          Blog page
          <FakeText />
        </FirstPageContainer>
        FOOTER
      </MainPageDiv>
    );
  }
}

export default Blog;
