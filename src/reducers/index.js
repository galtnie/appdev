import { combineReducers } from "redux";
import handleUsedTechnologies from "./handleUsedTechnologies";
import handleAppBarOptions from "./handleAppBarOptions";

export default combineReducers({
  usedTechnologies: handleUsedTechnologies,
  appBarOptions: handleAppBarOptions,
});
