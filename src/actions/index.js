import { TOGGLE_BURGER_MENU, CHANGE_STYLES_ON_SCROLL } from "./types";

export const toggleBurgerMenu = state => {
  return {
    type: TOGGLE_BURGER_MENU,
    payload: state,
  };
};

export const changeStylesOnScroll = styles => {
  return {
    type: CHANGE_STYLES_ON_SCROLL,
    payload: styles,
  };
};
