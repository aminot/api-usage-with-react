import { createStore, combineReducers } from "redux";

import listReducer from "../redux/reducers/listReducers"

const reducers = combineReducers({myList:listReducer})
const store = createStore(reducers);


export default store;