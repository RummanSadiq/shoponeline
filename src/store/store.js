import {createStore} from 'redux';
import rootReducer from './rootReducer';
import {combineReducers} from 'redux';
import updateImageReducer from './updateimagereducer';

const mainReducer = combineReducers({uiR:updateImageReducer,rR:rootReducer});

const store = createStore(mainReducer);

export default store;
