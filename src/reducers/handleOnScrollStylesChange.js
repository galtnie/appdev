import { CHANGE_STYLES_ON_SCROLL } from "../actions/types";

const initialState = {
  navbarColor: "transparent",
  backgroundColor: "white",
  fontColor: "black",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STYLES_ON_SCROLL:
      return action.payload;
    default:
      return state;
  }
};
