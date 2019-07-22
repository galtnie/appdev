import React, { Fragment, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { withStyles, Typography, Button } from "@material-ui/core/";
import { CenteredGrid, HomeSlideAppearContainer } from "../styles";
import { renderEmptyColumns } from "../functions";

const classes = theme => {
  return {
    button: {
      borderWidth: "2px",
      borderStyle: "solid",
      borderRadius: "0.5rem",
      textTransform: "none",
      paddingLeft: "2rem",
      paddingRight: "2rem",
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

export default withStyles(classes)(({ classes, smallDevice }) => {
  const [container, setContainer] = useState(null);
  const [slideIn, setSlideIn] = useState(false);

  const measuredRef = useCallback(node => {
    setContainer(node);
  }, []);

  useEffect(() => {
    if (container !== null) {
      window.addEventListener("scroll", () => {
        if (container.getBoundingClientRect().top < window.innerHeight) {
          setSlideIn(true);
        } else if (container.getBoundingClientRect().top > window.innerHeight) {
          setSlideIn(false);
        }
      });
    }
  }, [container, slideIn]);

  return (
    <Fragment>
      {renderEmptyColumns(4)}
      <CenteredGrid
        item
        md={4}
        xs={10}
        height={"8rem"}
        ref={measuredRef}
        smalldevice={Number(smallDevice)}
      >
        <Link to={`/portfolio`} className={classes.link}>
          <HomeSlideAppearContainer trigger={smallDevice ? "none" : slideIn}>
            <Button className={classes.button} color="primary">
              <Typography variant={smallDevice ? "body1" : "h6"}>
                See our technologies
              </Typography>
            </Button>
          </HomeSlideAppearContainer>
        </Link>
      </CenteredGrid>
      {renderEmptyColumns(4)}
    </Fragment>
  );
});
