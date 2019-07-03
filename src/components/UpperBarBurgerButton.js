import "../css/UpperBar.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleBurgerMenu } from "../actions";
import {
  BurgerButtonContainer,
  BurgerButtonLinesWrapper,
  BurgerLineTop,
  BurgerLineMiddle,
  BurgerLineBottom,
} from "../styles";

const BurgerButton = ({ toggleBurgerMenu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <BurgerButtonContainer>
        <BurgerButtonLines
          open={menuOpen}
          onClick={() => {
            setMenuOpen(prevState => !prevState);
            toggleBurgerMenu(!menuOpen);
          }}
          color="white"
        />
      </BurgerButtonContainer>
    </div>
  );
};

const BurgerButtonLines = ({ open, color, onClick }) => {
  const [opened, setOpened] = useState(open ? open : false);
  const [hue] = useState(color ? color : "white");

  useEffect(() => {
    if (open !== opened) {
      setOpened(open);
    }
  }, [open, opened]);

  return (
    <BurgerButtonLinesWrapper
      onClick={
        onClick
          ? onClick
          : () => {
              setOpened(!opened);
            }
      }
    >
      <BurgerLineTop color={hue} open={opened} />
      <BurgerLineMiddle color={hue} open={opened} />
      <BurgerLineBottom color={hue} open={opened} />
    </BurgerButtonLinesWrapper>
  );
};

const mapStateToProps = state => {
  return {
    appBarOptions: state.appBarOptions,
  };
};

const mapDispatchToProps = {
  toggleBurgerMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerButton);
