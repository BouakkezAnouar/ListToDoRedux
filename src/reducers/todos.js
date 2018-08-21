const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (action.todo.text.length === 0) return state;
      return state.concat(action.todo);
    case "TOGGLE_TODO":
      return state.map(
        el => (el.id === action.id ? { ...el, completed: !el.completed } : el)
      );
    case "DELETE_TODO":
      return state.filter(el => el.id !== action.id);
    case "EDIT_TODO":
      return state.map(
        el =>
          el.id === action.todo.id
            ? { ...el, text: prompt("edit todo", action.todo.text) }
            : el
      );
    default:
      return state;
  }
};

export default todos;
