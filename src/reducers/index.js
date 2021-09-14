import userReducer from "./userReducer";
import testReducer from "./testReducer";
import loginReducer from "./loginReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  users: userReducer,
  tests: testReducer,
  login: loginReducer,
});

export default allReducers;
