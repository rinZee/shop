import { combineReducers } from "redux";

import { productReducer } from "./producerRedcucer";
const reducers = combineReducers({
  allProducts: productReducer,
});
export default reducers;
