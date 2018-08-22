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
//amelioration code when fuction return object
export const addtodo = text => ({
  type: "ADD_TODO",
  todo: {
    //global varibale nextId
    id: window.nextId++,
    text,
    completed: false
  }
});
