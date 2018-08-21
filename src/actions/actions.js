export const getVisibleList = (list, filter) => {
  switch (filter) {
    case "All":
      return list;
    case "Completed":
      return list.filter(el => el.completed);
    case "NotCompleted":
      return list.filter(el => !el.completed);
    default:
      return list;
  }
};

export const addtodo = text => {
  return {
    type: "ADD_TODO",
    todo: {
      //global varibale nextId
      id: window.nextId++,
      text,
      completed: false
    }
  };
};
