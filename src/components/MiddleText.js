import React from "react";
import { Typography } from "@material-ui/core";

export default ({ children, title, top, smallDevice }) => {
  return (
    <div style={{ marginTop: top ? top : 0 }}>
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
    </div>
  );
};
