import React from "react";
import { connect } from "react-redux";

const Filter = ({ children, setVisibilty, filter }) => {
  return (
    <span
      onClick={() => setVisibilty(children)}
      style={{ color: filter === children ? "blue" : "black" }}
    >
      {children}
    </span>
  );
};

//amelioration code when fuction return function (implicit return)
const mapDispatchToProps = dispatch => ({
  setVisibilt(filter) {
    dispatch({ type: "SET_FILTER", filter });
  }
});
// amelioration code when function return object
const mapStateToProps = state => ({ filter: state.filter });

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default FilterContainer;
