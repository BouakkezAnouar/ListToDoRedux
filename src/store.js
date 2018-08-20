import { createStore } from "redux";
import todos from "./reducers/todos";
const store = createStore(todos);

store.dispatch({
  type: "ADD_TODO",
  todo: {
    id: 0,
    text: "hmdl",
    completed: false
  }
});

store.dispatch({
  type: "DELETE_TODO",
  id: 0
});

export default store;
