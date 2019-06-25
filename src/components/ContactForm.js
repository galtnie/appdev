import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import {
  WidthContainer,
  ContactFormWrapper,
  ContactFormForm,
  ContactFormControl,
  ContactFormTextField,
  ContactFormButton,
} from "../styles";



class ContactForm extends Component {
  render() {
    return (
      <WidthContainer>
        <ContactFormWrapper>
          <h2>GOT PROJECT IN MIND?</h2>
          <ContactFormForm>
            <ContactFormControl>
              <InputLabel htmlFor="component-simple">Your Name</InputLabel>
              <Input
                id="component-simple"
                label="Your Name"
                type="text"
                // value={name}
                // onChange={handleChange}
              />
            </ContactFormControl>
            <ContactFormControl>
              <InputLabel htmlFor="component-simple">Your Email</InputLabel>
              <Input
                id="component-simple"
                label="Your Email"
                type="email"
                // value={email}
                // onChange={handleChange}
              />
            </ContactFormControl>
            <ContactFormTextField
              id="standard-multiline-static"
              label="Message or question"
              multiline
              margin="normal"
              rows="4"
            />
          </ContactFormForm>
          <ContactFormButton variant="outlined" color="primary">
            <span>Send us a message</span>
          </ContactFormButton>
        </ContactFormWrapper>
      </WidthContainer>
    );
  }
}

export default ContactForm;
