import { combineReducers } from "redux";
import handleUsedTechnologies from "./handleUsedTechnologies";
import handleAppBarOptions from "./handleAppBarOptions";
import toggleBurgerMenu from "./toggleBurgerMenu";

export default combineReducers({
  usedTechnologies: handleUsedTechnologies,
  appBarOptions: handleAppBarOptions,
  isBurgerMenuOpen: toggleBurgerMenu,
});
