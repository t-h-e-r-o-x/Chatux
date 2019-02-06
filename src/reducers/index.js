import contacts from "./contacts";
import user from "./user";

import { combineReducers } from "redux"; //in built redux method to combine multiple reducers

export defualt combineReducers ({
  user,
  contacts,    //hence we have pass an object exactly like the state object we had visualized
});
