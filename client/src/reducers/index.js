import { combineReducers } from "redux";
import connection from "./connection";
import auth from "./auth";
import dashboard from "./dashboard";
import message from "./message";

export default combineReducers({
  connection,
  dashboard,
  auth,
  message
});
