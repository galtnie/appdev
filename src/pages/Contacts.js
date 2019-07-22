import React from "react";
import FakeText from "../components/FakeText";
import ContactForm from "../components/ContactForm";
import { MainPageDiv, FirstColorfulContainer } from "../styles";
import ResponsiveColumnContainer from "../components/ResponsiveColumnContainer.js";

class Contacts extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstColorfulContainer>
          <ResponsiveColumnContainer style={{ marginTop: "10rem" }}>
            Contacts
            <FakeText />
          </ResponsiveColumnContainer>
        </FirstColorfulContainer>
        <ContactForm />
      </MainPageDiv>
    );
  }
}

export default Contacts;
