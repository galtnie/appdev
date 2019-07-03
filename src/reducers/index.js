import { combineReducers } from "redux";
import handleUsedTechnologies from "./handleUsedTechnologies";
import handleNavigationOptions from "./handleNavigationOptions";
import toggleBurgerMenu from "./toggleBurgerMenu";

export default combineReducers({
  usedTechnologies: handleUsedTechnologies,
  navigationOptions: handleNavigationOptions,
  isBurgerMenuOpen: toggleBurgerMenu,
});
