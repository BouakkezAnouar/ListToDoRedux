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

const mapDispatchToProps = dispatch => {
  return { setVisibilty: filter => dispatch({ type: "SET_FILTER", filter }) };
};
const mapStateToProps = state => {
  return { filter: state.filter };
};

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default FilterContainer;
