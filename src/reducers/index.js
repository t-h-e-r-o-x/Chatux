import contacts from "./contacts";
import user from "./user";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";


import { combineReducers } from "redux"; //in built redux method to combine multiple reducers

export default combineReducers({
  user,
  contacts,
  typing,
  messages,
  activeUserId   //hence we have pass an object exactly like the state object we had visualized
});
