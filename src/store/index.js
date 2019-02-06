import {createStore} from "redux";
import reducer from "../reducers/index.js";
import {contacts} from "../static-data";

const store = createStore(reducer,{contacts});

export default store;
