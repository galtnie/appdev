import { TOGGLE_BURGER_MENU } from "../actions/types";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_BURGER_MENU:
      return action.payload;
    default:
      return state;
  }
};
