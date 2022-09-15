import { combineReducers } from "redux";

import gettingAllDataR from "./getAllData";
import addToCartR from './addToCart';
import miniNavR from "./miniNav";

export const reducers = combineReducers({
  gettingAllDataR,
  addToCartR, 
  miniNavR
})