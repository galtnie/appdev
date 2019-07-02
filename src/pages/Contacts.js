import React from "react";
import FakeText from "../components/FakeText";
import ContactForm from "../components/ContactForm";
import { MainPageDiv, FirstPageContainer } from "../styles";

class Contacts extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstPageContainer>
          Contacts
          <FakeText />
        </FirstPageContainer>
        <ContactForm />
      </MainPageDiv>
    );
  }
}

export default Contacts;

//  <ContactForm />;
