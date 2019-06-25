import React from "react";
import { connect } from "react-redux";
import {
  WidthContainer,
  TechsUsedContainer,
  TechsUsedParagraph,
  TechsUsedList,
  TechsUsedListItem,
  TechsUsedImageContainer,
} from "../styles";

const TechnologiesUsed = ({ usedTechnologies }) => {
  console.log(usedTechnologies);
  return (
    <WidthContainer>
      <TechsUsedContainer>
        <h1>TECHNOLOGIES WE USE</h1>
        <TechsUsedParagraph>
          We focus on modern and already proven technologies that bring benefits
          for projects we create.
        </TechsUsedParagraph>
        <TechsUsedList>
          {usedTechnologies
            ? usedTechnologies.map(technology => {
                return (
                  <TechsUsedListItem>
                    <TechsUsedImageContainer logo={technology.logo} />
                    <p>{` ${technology.name} Development`}</p>
                  </TechsUsedListItem>
                );
              })
            : null}


        </TechsUsedList>
      </TechsUsedContainer>
    </WidthContainer>
  );
};

const mapStateToProps = state => {
  return {
    usedTechnologies: state.usedTechnologies,
  };
};

export default connect(mapStateToProps)(TechnologiesUsed);
