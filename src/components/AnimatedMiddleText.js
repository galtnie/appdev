import React, { useEffect, useState, useCallback } from "react";
import { HomeSlideAppearContainer } from "../styles";
import { Typography } from "@material-ui/core";
//
//
//
export default ({ children, title, smallDevice }) => {
  const [container, setContainer] = useState(null);
  const [slideIn, setSlideIn] = useState(false);

  const measuredRef = useCallback(node => {
    setContainer(node);
  }, []);

  useEffect(() => {
    if (container !== null) {
      window.addEventListener("scroll", () => {
        if (container.getBoundingClientRect().bottom < window.innerHeight) {
          setSlideIn(true);
        } else if (
          container.getBoundingClientRect().bottom > window.innerHeight
        ) {
          setSlideIn(false);
        }
      });
    }
  }, [container, slideIn]);

  const renderText = () => {
    return (
      <Typography
        variant={smallDevice ? (title ? "h6" : "body1") : title ? "h4" : "h6"}
        gutterBottom={true}
        style={{
          color: title ? "black" : "rgb(24,45,62)",
          textAlign: "center",
          fontWeight: title ? "400" : "100",
        }}
      >
        {children}
      </Typography>
    );
  };

  return (
    <div ref={measuredRef} style={{ height: "30%" }}>
      {smallDevice ? (
        renderText()
      ) : (
        <HomeSlideAppearContainer trigger={slideIn}>
          {renderText()}
        </HomeSlideAppearContainer>
      )}
    </div>
  );
};
