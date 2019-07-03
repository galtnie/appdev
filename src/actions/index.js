import { TOGGLE_BURGER_MENU } from "./types";

export const toggleBurgerMenu = state => {
  return {
    type: TOGGLE_BURGER_MENU,
    payload: state,
  };
};
