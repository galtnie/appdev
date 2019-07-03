import React from "react";
import FakeText from "../components/FakeText";
import ContactForm from "../components/ContactForm";
import { MainPageDiv, FirstColorfulContainer } from "../styles";
import { Grid } from "@material-ui/core/";

class Contacts extends React.Component {
  render() {
    return (
      <MainPageDiv>
        <FirstColorfulContainer>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item lg={8} md={9} xs={10}>
              Contacts
              <FakeText />
            </Grid>
          </Grid>
        </FirstColorfulContainer>
        <ContactForm />
      </MainPageDiv>
    );
  }
}

export default Contacts;

//  <ContactForm />;
