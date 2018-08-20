import React from "react";
import { connect } from "react-redux";
const ToDo = ({ todo, toggleToDo, deleteToDo, editToDo }) => {
  return (
    <div>
      <span
        onClick={() => toggleToDo(todo.id)}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button onClick={() => editToDo(todo)}>edit</button>
      <button onClick={() => deleteToDo(todo.id)}>x</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteToDo: id => dispatch({ type: "DELETE_TODO", id }),
    toggleToDo: id => dispatch({ type: "TOGGLE_TODO", id }),
    editToDo: todo => dispatch({ type: "EDIT_TODO", todo })
  };
};

const ToDoContainer = connect(
  null,
  mapDispatchToProps
)(ToDo);

export default ToDoContainer;
