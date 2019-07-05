import { combineReducers } from "redux";
import handleUsedTechnologies from "./handleUsedTechnologies";
import handleNavigationOptions from "./handleNavigationOptions";
import handleExternalLinks from "./handleExternalLinks";
import toggleBurgerMenu from "./toggleBurgerMenu";
import handleLogo from "./handleLogo";

export default combineReducers({
  usedTechnologies: handleUsedTechnologies,
  navigationOptions: handleNavigationOptions,
  externalLinks: handleExternalLinks,
  isBurgerMenuOpen: toggleBurgerMenu,
  logo: handleLogo,
});
