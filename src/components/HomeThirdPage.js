import React from "react";
import { HomeThirdContainer } from "../styles";
import { withWidth } from "@material-ui/core";
import ProjectKickoff from "./ProjectKickoff";
import SendMessageButton from "./SendMessageButton";
import Footer from "./Footer";

export default withWidth()(({ render, width }) => {
  const smallDevice = width === "sm" || width === "xs";

  return (
    <HomeThirdContainer
      style={{
        zIndex: smallDevice ? 3 : render,
        position: smallDevice ? "static" : "fixed",
      }}
      smalldevice={Number(smallDevice)}
    >
      <div style={{ height: smallDevice ? "auto" : "50vh" }}>
        <ProjectKickoff />
        <SendMessageButton />
      </div>
      <div style={{ height: smallDevice ? "auto" : "50vh" }}>
        <Footer />
      </div>
    </HomeThirdContainer>
  );
});
