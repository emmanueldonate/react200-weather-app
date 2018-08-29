import { combineReducers } from 'redux';
import searchReducer from './components/SearchInfo/searchReducer';

const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer;
