import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

// REVIEW: chats, messages and profiles are bad naming conventions.
// Change to chatReducer, messageReducer and profileReducer
const rootReducer = combineReducers({
  chats: chatReducer,
  messages: messageReducer,
  profiles: profileReducer,
});
export default rootReducer;
