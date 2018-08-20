const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.todo.text.length === 0) return state;
      return state.concat(action.todo);
    case "TOGGLE_TODO":
      return state.map(el => {
        if (el.id === action.id) return { ...el, completed: !el.completed };
        return el;
      });
    case "DELETE_TODO":
      return state.filter(el => el.id !== action.id);
    case "EDIT_TODO":
      return state.map(el => {
        if (el.id === action.todo.id)
          return { ...el, text: prompt("edit todo", action.todo.text) };
        return el;
      });
    default:
      return state;
  }
};

export default todos;
