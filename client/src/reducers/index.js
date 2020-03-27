//The main point of the reducer is to bring together all of the other reducers
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';


export default combineReducers({
    item: itemReducer
})