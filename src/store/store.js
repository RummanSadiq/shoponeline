import {createStore} from 'redux';
import rootReducer from './rootReducer';
import {combineReducers} from 'redux';
import updateImageReducer from './updateimagereducer';
import sizeReducer from './sizereducer';
import colorReducer from './colorreducer';

const mainReducer = combineReducers({uiR:updateImageReducer,rR:rootReducer,sR:sizeReducer,cR:colorReducer});

const store = createStore(mainReducer);

export default store;
