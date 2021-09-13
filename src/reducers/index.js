import userReducer from "./userReducer";
import testReducer from "./testReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  users: userReducer,
  tests: testReducer,
});

export default allReducers;
