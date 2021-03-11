import { combineReducers } from "redux";
import userData from "./userDataReducer";

export default combineReducers({
  data: userData,
});
