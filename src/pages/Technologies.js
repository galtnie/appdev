import React from "react";
import FakeText from "../components/FakeText";
import TechnologiesUsed from "../components/TechnologiesUsed";
import { MainPageDiv, FirstColorfulContainer } from "../styles";
import { Grid } from "@material-ui/core";

class Technologies extends React.Component {
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
              Technologies
              <FakeText />
            </Grid>
          </Grid>
        </FirstColorfulContainer>
        <TechnologiesUsed />
      </MainPageDiv>
    );
  }
}

export default Technologies;
