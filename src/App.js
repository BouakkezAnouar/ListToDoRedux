import React, { Component } from "react";
import ListToDo from "./components/ListToDo";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListToDo />
      </Provider>
    );
  }
}

export default App;
