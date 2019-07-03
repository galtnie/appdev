import React from "react";
import FakeText from "../components/FakeText";
import { MainPageDiv, FirstColorfulContainer } from "../styles";
import { Grid } from "@material-ui/core/";

class Services extends React.Component {
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
              Services page
              <FakeText />
            </Grid>
          </Grid>
        </FirstColorfulContainer>
      </MainPageDiv>
    );
  }
}

export default Services;
