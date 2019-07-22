import React from "react";
import MiddleText from "./MiddleText";
import { renderEmptyColumns } from "../functions";
import { Grid, withWidth } from "@material-ui/core/";

export default withWidth()(({ width }) => {
  const smallDevice = width === "sm" || width === "xs";

  return (
    <Grid container justify="center">
      {renderEmptyColumns(3)}
      <Grid item md={6} xs={10}>
        <MiddleText title={true} top={"5rem"} smallDevice={smallDevice}>
          LET'S KICKOFF YOUR PROJECT
        </MiddleText>
      </Grid>
      {renderEmptyColumns(3)}
      {renderEmptyColumns(3)}
      <Grid item md={6} xs={10}>
        <MiddleText title={false} top={"1rem"} smallDevice={smallDevice}>
          We are happy to see you on our website. Just let us know if we can
          start making something great together.
        </MiddleText>
      </Grid>
      {renderEmptyColumns(3)}
    </Grid>
  );
});
