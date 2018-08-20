import { createStore, combineReducers } from "redux";
import todos from "./reducers/todos";
import filter from "./reducers/filter";
const store = createStore(
  combineReducers({
    todos,
    filter
  })
);

export default store;
