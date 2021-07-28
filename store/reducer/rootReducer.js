import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
// import authReducer from "./authReducer"

const rootReducer = combineReducers({
  chats: chatReducer,
  messages: messageReducer,
  profiles: profileReducer,
  //   users: authReducer
});
export default rootReducer;
