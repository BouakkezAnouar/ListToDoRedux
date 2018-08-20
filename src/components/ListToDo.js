import React from "react";
import { connect } from "react-redux";
import ToDo from "./ToDo";
import Filter from "./Filter";

let nextId = 0;
const ListToDo = ({ onAddToDo = () => {}, list = [] }) => {
  let input; // the input variable which will hold reference to the input element
  return (
    <div>
      <div>
        <input
          ref={node => {
            // assign the node reference to the input variable
            input = node;
          }}
        />
        <button
          onClick={() => {
            onAddToDo(input.value);
            input.value = "";
          }}
        >
          add
        </button>
      </div>
      <div>
        <Filter>All</Filter> ,<Filter>Completed</Filter>,
        <Filter>NotCompleted</Filter>
      </div>
      <div>
        {list.map((el, i) => (
          <ToDo key={i} todo={el} />
        ))}
      </div>
    </div>
  );
};

const addtodo = text => {
  return {
    type: "ADD_TODO",
    todo: {
      id: nextId++,
      text,
      completed: false
    }
  };
};

const getVisibleList = (list, filter) => {
  switch (filter) {
    case "All":
      return list;
    case "Completed":
      return list.filter(el => el.completed !== false);
    case "NotCompleted":
      return list.filter(el => el.completed === false);
    default:
      return list;
  }
};

const mapStateToProps = state => {
  return { list: getVisibleList(state.todos, state.filter) };
};

const mapDispatchToProps = dispatch => {
  return { onAddToDo: text => dispatch(addtodo(text)) };
};

const ListToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListToDo);

export default ListToDoContainer;
