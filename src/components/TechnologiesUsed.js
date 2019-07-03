import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles, Typography } from "@material-ui/core/";
import {
  TechsUsedContainer,
  TechsUsedParagraph,
  TechsUsedList,
  TechsUsedListItem,
  TechsUsedImageContainer,
} from "../styles";
import Button from "@material-ui/core/Button";

const classes = theme => {
  return {
    button: {
      marginTop: "1rem",
      borderWidth: "2px",
      borderStyle: "solid",
      borderRadius: "0.5rem",
      fontWeight: "bold",
      "&:hover": {
        borderColor: theme.palette.primary.main,
        color: "white",
        backgroundColor: theme.palette.primary.main,
      },
      "&:active": {
        borderColor: theme.palette.primary.main,
        color: "white",
        backgroundColor: theme.palette.primary.main,
      },
    },
    link: { textDecoration: "none" },
  };
};

const TechnologiesUsed = ({ usedTechnologies, classes }) => {
  return (
    <TechsUsedContainer>
      <Typography variant="h4" align="center" style={{ marginTop: "1rem" }}>
        TECHNOLOGIES WE USE
      </Typography>
      <TechsUsedParagraph>
        We focus on modern and already proven technologies that bring benefits
        for projects we create.
      </TechsUsedParagraph>
      <TechsUsedList>
        {usedTechnologies
          ? usedTechnologies.map(technology => {
              return (
                <TechsUsedListItem key={technology.name}>
                  <TechsUsedImageContainer logo={technology.logo} />
                  <p>{` ${technology.name} Development`}</p>
                </TechsUsedListItem>
              );
            })
          : null}
      </TechsUsedList>
      <Link to={`/portfolio`} className={classes.link}>
        <Button className={classes.button} color="primary">
          <Typography variant="button">See our portfolio</Typography>
        </Button>
      </Link>
    </TechsUsedContainer>
  );
};

const mapStateToProps = state => {
  return {
    usedTechnologies: state.usedTechnologies,
  };
};

export default connect(mapStateToProps)(withStyles(classes)(TechnologiesUsed));
