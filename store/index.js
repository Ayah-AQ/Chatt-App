import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchMessages } from "./actions/messageActions";
import { fetchChats } from "./actions/chatActions";
import { fetchProfiles } from "./actions/profileAction";
import { checkForToken } from "./actions/authActions";
import rootReducer from "./reducer/rootReducer";
const store = createStore(rootReducer, applyMiddleware(thunk));

//run once at the begining

store.dispatch(fetchMessages());
store.dispatch(fetchChats());
store.dispatch(fetchProfiles());
store.dispatch(checkForToken())

export default store;
