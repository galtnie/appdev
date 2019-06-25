import { combineReducers } from 'redux';
import handleUsedTechnologies from './handleUsedTechnologies';

export default combineReducers({
    usedTechnologies: handleUsedTechnologies
});