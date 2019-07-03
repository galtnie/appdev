import React from "react";
import { connect } from "react-redux";
import { Collapse } from "@material-ui/core";
import { toggleBurgerMenu } from "../actions";
import {
  BurgerMenuItemContainer,
  BurgerMenuItem,
  BurgerMenuList,
  BurgerMenuContainer,
  BurgerStyledLink,
} from "../styles";
import PropTypes from "prop-types";

const MenuItem = ({ delay, children, closeBurgerMenu }) => {
  return (
    <BurgerMenuItemContainer delay={delay}>
      <BurgerMenuItem
        onClick={e => {
          closeBurgerMenu();
        }}
      >
        {children}
      </BurgerMenuItem>
    </BurgerMenuItemContainer>
  );
};

class BurgerMenu extends React.Component {
  composeMenuItems = () => {
    const menuItems = this.props.appBarOptions.map((value, index) => {
      const link = value !== "Contact us" ? value.toLowerCase() : "contacts";

      return (
        <BurgerStyledLink to={`/${link}`} key={index}>
          <MenuItem
            key={index}
            delay={`${index * 0.1 + 0.32}s`}
            closeBurgerMenu={() => {
              this.props.toggleBurgerMenu(false);
            }}
          >
            {value}
          </MenuItem>
        </BurgerStyledLink>
      );
    });
    return menuItems;
  };

  renderSlide = () => {
    return (
      <Collapse
        in={this.props.isBurgerMenuOpen}
        timeout={{ enter: 500, exit: 300 }}
        unmountOnExit={true}
      >
        <BurgerMenuList>{this.composeMenuItems()}</BurgerMenuList>
      </Collapse>
    );
  };

  render() {
    return (
      <BurgerMenuContainer opened={this.props.isBurgerMenuOpen}>
        {this.renderSlide()}
      </BurgerMenuContainer>
    );
  }
}

BurgerMenu.propTypes = {
  isBurgerMenuOpen: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    appBarOptions: state.appBarOptions,
    isBurgerMenuOpen: state.isBurgerMenuOpen,
  };
};

const mapDispatchToProps = {
  toggleBurgerMenu,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BurgerMenu);
