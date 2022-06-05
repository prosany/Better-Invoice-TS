import { combineReducers } from "redux";
import demoReducer from "./Demo/reducer";
import loginReducer from "./Authentication/Login/reducer";
import storeLoginReducer from "./Authentication/Login/storeData";

const rootReducers = combineReducers({
  demoReducer,
  loginReducer,
  storeLoginReducer,
});

export default rootReducers;
