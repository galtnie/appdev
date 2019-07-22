import { combineReducers } from "redux";
import handleUsedTechnologies from "./handleUsedTechnologies";
import handleNavigationOptions from "./handleNavigationOptions";
import handleExternalLinks from "./handleExternalLinks";
import handlePartnersLogos from "./handlePartnersLogos";
import toggleBurgerMenu from "./toggleBurgerMenu";
import handleLogo from "./handleLogo";
import handleOnScrollStylesChange from "./handleOnScrollStylesChange";
import handleOnScrollStyles from "./handleOnScrollStyles";
import handleFirstPageData from "./handleFirstPageData";
import handleServiceList from "./handleServiceList";
import handleProjectList from "./handleProjectList";

export default combineReducers({
  usedTechnologies: handleUsedTechnologies,
  navigationOptions: handleNavigationOptions,
  externalLinks: handleExternalLinks,
  isBurgerMenuOpen: toggleBurgerMenu,
  logo: handleLogo,
  partnersLogos: handlePartnersLogos,
  currentStylesSubjectToScroll: handleOnScrollStylesChange,
  onScrollStyles: handleOnScrollStyles,
  firstPageData: handleFirstPageData,
  serviceList: handleServiceList,
  projectList: handleProjectList,
});
