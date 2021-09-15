import userReducer from "./userReducer";
import testReducer from "./testReducer";
import loginReducer from "./loginReducer";
import { combineReducers } from "redux";
import submissionReducer from "./submissionReducer";

const allReducers = combineReducers({
  users: userReducer,
  tests: testReducer,
  login: loginReducer,
  submission: submissionReducer,
});

export default allReducers;
