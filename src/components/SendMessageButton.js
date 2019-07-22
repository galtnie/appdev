import React from "react";
import {
  withWidth,
  withStyles,
  Grid,
  Button,
  Typography,
} from "@material-ui/core/";
import { renderEmptyColumns } from "../functions";

const classes = theme => {
  return {
    button: {
      margin: "2rem",
      color: "white",
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: "0.5rem",
      fontWeight: "bold",
      paddingLeft: "3rem",
      paddingRight: "3rem",
      textTransform: "none",
      backgroundImage: `linear-gradient( to left top,
    ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
      "&:hover": {
        backgroundImage: "none",
        backgroundColor: "white",
        color: "#3f51b5",
        border: `1px solid ${theme.palette.secondary.main}`,
      },
    },
  };
};
export default withWidth()(
  withStyles(classes)(({ classes }) => {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        {renderEmptyColumns(3)}
        <Grid item md={6} xs={10}>
          <div>
            <Button className={classes.button}>
              <Typography variant="body1"> Send Us Message </Typography>
            </Button>
          </div>
        </Grid>
        {renderEmptyColumns(3)}
      </Grid>
    );
  })
);
