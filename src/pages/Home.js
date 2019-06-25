import React from "react";
import FakeText from "../components/FakeText";
import { MainPageDiv, FirstPageContainer } from "../styles";

class Home extends React.Component {
    render() {
    return (
      <MainPageDiv>
        <FirstPageContainer>
          Home page
          <FakeText />
        </FirstPageContainer>
        FOOTER
      </MainPageDiv>
    );

    }
}

export default Home;