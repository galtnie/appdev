import React from "react";
import {
  TechsUsedListItem,
  TechsUsedImageContainer,
  HomeSlideAppearContainer,
} from "../styles";
import Tilt from "react-tilt";

export default ({ logo, name, trigger, turn, smallDevice }) => {
  const renderCard = () => {
    return (
      <TechsUsedListItem>
        <TechsUsedImageContainer logo={logo} />
        <p>{` ${name} Development`}</p>
      </TechsUsedListItem>
    );
  };

  return (
    <HomeSlideAppearContainer
      trigger={trigger}
      turn={turn}
      smalldevice={Number(smallDevice)}
    >
      {smallDevice ? (
        renderCard()
      ) : (
        <Tilt
          className="Tilt"
          options={{ max: 45, reverse: false, speed: 1000 }}
        >
          {renderCard()}
        </Tilt>
      )}
    </HomeSlideAppearContainer>
  );
};
