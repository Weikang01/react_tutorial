import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export const AppPhaseEnum = {
  initial: 0,
  loading: 1,
  listing: 2,
  error: 3,
};

export default class App extends Component {
  state = {
    users: [],
    phase: AppPhaseEnum.initial,
    error: "",
  };

  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List appState={this.state} appPhase={this.state.phase} />
      </div>
    );
  }
}
