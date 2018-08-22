import { createStore, combineReducers } from "redux";
import todos from "./reducers/todos";
import filter from "./reducers/filter";
const store = createStore(
  combineReducers({
    todos,
    filter
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
