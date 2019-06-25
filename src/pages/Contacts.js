import React from "react";
import FakeText from "../components/FakeText";
import { MainPageDiv, FirstPageContainer } from "../styles";

class Contacts extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstPageContainer>
          Contacts
          <FakeText />
        </FirstPageContainer>
        FOOTER
      </MainPageDiv>
    );
  }
}

export default Contacts;


//  <ContactForm />;

