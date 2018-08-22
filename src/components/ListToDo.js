import React from "react";
import { connect } from "react-redux";
import ToDo from "./ToDo";
import Filter from "./Filter";
import { addtodo, getVisibleList } from "../actions/actions";

window.nextId = 0;
const ListToDo = ({ onAddToDo = () => {}, list = [] }) => {
  let input; // the input variable which will hold reference to the input element
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) return;
          onAddToDo(input.value);
          input.value = "";
        }}
      >
        <input
          ref={node => {
            // assign the node reference to the input variable
            input = node;
          }}
        />
        <button type="submit">Add todo</button>
      </form>
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
//amelioration
const mapStateToProps = state => ({
  list: getVisibleList(state.todos, state.filter)
});

//amelioration
const mapDispatchToProps = dispatch => ({
  onAddToDo(text) {
    dispatch(addtodo(text));
  }
});

const ListToDoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListToDo);

export default ListToDoContainer;
