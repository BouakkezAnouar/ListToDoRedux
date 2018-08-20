const filter = (state = "All", action) => {
  if (action.type === "SET_FILTER") return action.filter;
  return state;
};

export default filter;
