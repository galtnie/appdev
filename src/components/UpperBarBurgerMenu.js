import "../css/UpperBar.css";
import React, { useState, useEffect } from "react";
import { Collapse } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  BurgerMainContainer,
  BurgerMenuItemContainer,
  BurgerMenuItem,
  BurgerMenuList,
  BurgerMenuContainer,
  BurgerMenuButtonContainer,
  BurgerLineTop,
  BurgerLineMiddle,
  BurgerLineBottom,
  BurgerStyledLink,
} from "../styles";

const Burger = ({ appBarOptions }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = appBarOptions.map((value, index) => {
    const link = value !== "Contact us" ? value.toLowerCase() : "contacts";

    return (
      <BurgerStyledLink to={`/${link}`} key={index}>
        <MenuItem
          key={index}
          delay={`${index * 0.1 + 0.32}s`}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          {value}
        </MenuItem>
      </BurgerStyledLink>
    );
  });

  return (
    <div>
      <BurgerMainContainer>
        <MenuButton
          open={menuOpen}
          onClick={() => {
            setMenuOpen(prevState => !prevState);
          }}
          color="white"
        />
      </BurgerMainContainer>
      <Menu open={menuOpen}>{menuItems}</Menu>
    </div>
  );
};

const MenuItem = ({ delay, children, onClick }) => {
  return (
    <BurgerMenuItemContainer delay={delay}>
      <BurgerMenuItem
        onClick={e => {
          onClick(); // i will have to remake to link
        }}
      >
        {children}
      </BurgerMenuItem>
    </BurgerMenuItemContainer>
  );
};

const Menu = ({ open, children }) => {
  const [opened, setOpened] = useState(open ? open : false);

  useEffect(() => {
    if (open !== opened) {
      setOpened(open);
    }
  }, [open, opened]);

  const renderSlide = () => {
    return (
      <Collapse
        in={opened}
        timeout={{ enter: 500, exit: 300 }}
        unmountOnExit={true}
      >
        <BurgerMenuList>{children}</BurgerMenuList>
      </Collapse>
    );
  };

  return (
    <BurgerMenuContainer opened={opened}>{renderSlide()}</BurgerMenuContainer>
  );
};

const MenuButton = ({ open, color, onClick }) => {
  const [opened, setOpened] = useState(open ? open : false);
  const [hue] = useState(color ? color : "white");

  useEffect(() => {
    if (open !== opened) {
      setOpened(open);
    }
  }, [open, opened]);

  return (
    <BurgerMenuButtonContainer
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
    </BurgerMenuButtonContainer>
  );
};

const mapStateToProps = state => {
  return {
    appBarOptions: state.appBarOptions,
  };
};

export default connect(mapStateToProps)(Burger);
