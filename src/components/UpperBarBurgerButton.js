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

class BurgerButton extends React.Component {
  render() {
    return (
      <div>
        <BurgerButtonContainer>
          <BurgerButtonLines
            open={
              this.props.isBurgerMenuOpen ? this.props.isBurgerMenuOpen : false
            }
            onClick={() => {
              this.props.toggleBurgerMenu(!this.props.isBurgerMenuOpen);
            }}
            color="white"
          />
        </BurgerButtonContainer>
      </div>
    );
  }
}

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
  return { isBurgerMenuOpen: state.isBurgerMenuOpen };
};

export default connect(
  mapStateToProps,
  { toggleBurgerMenu }
)(BurgerButton);
