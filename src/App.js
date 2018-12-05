import React, { Component } from 'react';
import { Provider } from "mobx-react";
import store from "./Store";
import MembersList from "./MembersList";
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <div className="App">
          <h3>Members List</h3>
          <MembersList />
        </div>
      </Provider>
    );
  }
}

export default App;
