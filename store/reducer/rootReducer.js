import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  chats: chatReducer,
  messages: messageReducer,
  profiles: profileReducer,
});
export default rootReducer;
