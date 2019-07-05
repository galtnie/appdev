import React, { Component } from "react";
import {
  Input,
  InputLabel,
  Typography,
  Grid,
  withStyles,
  Hidden,
} from "@material-ui/core";
import {
  ContactFormForm,
  ContactFormControl,
  ContactFormTextField,
  ContactFormButton,
} from "../styles";

const classes = theme => ({
  nameInput: {
    marginLeft: theme.spacing(0),
  },
  emailInput: {
    marginRight: theme.spacing(0),
  },
});

class ContactForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        // justify="space-around"
        alignItems="center"
      >
        <Grid item md={2} sm={1} />
        <Grid item md={8} xs={10}>
          <Typography variant="h4" align="center" style={{ marginTop: "1rem" }}>
            GOT PROJECT IN MIND?
          </Typography>
        </Grid>
        <Grid item md={2} sm={1} />

        <ContactFormForm>
          <Hidden xsDown>
            <Grid item md={2} sm={1} />
          </Hidden>

          <Grid item md={3} sm={4} xs={10} className={classes.nameInput}>
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
          </Grid>

          <Hidden xsDown>
            <Grid item md={2} sm={2} />
          </Hidden>

          <Grid item md={3} sm={4} xs={10} className={classes.emailInput}>
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
          </Grid>
          <Hidden xsDown>
            <Grid item md={2} sm={1} />
          </Hidden>
          <Grid item md={8} xs={10}>
            <ContactFormTextField
              id="standard-multiline-static"
              label="Message or question"
              multiline
              margin="normal"
              rows="6"
            />
          </Grid>
        </ContactFormForm>

        <ContactFormButton variant="outlined" color="primary" type="submit">
          <span>Send us a message</span>
        </ContactFormButton>
      </Grid>
    );
  }
}

export default withStyles(classes)(ContactForm);
