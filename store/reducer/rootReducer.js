import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";
// import profileReducer from "./profileReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  chatReducer,
  messageReducer,
  // profileReducer,
  authReducer,

});
export default rootReducer;
