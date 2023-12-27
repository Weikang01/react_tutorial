import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export const AppPhaseEnum = {
  initial: 0,
  loading: 1,
  listing: 2,
  error: 3,
};

export default class List extends Component {
  state = {
    users: [],
    appPhase: AppPhaseEnum.initial,
    errorMsg: "",
  };

  componentDidMount() {
    this.token = PubSub.subscribe("listState", (_, stateObj) => {
      this.setState(stateObj);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, appPhase, errorMsg } = this.state;

    if (appPhase === AppPhaseEnum.listing) {
      return (
        <div className="row">
          {users.map((user) => {
            return (
              <div className="card" key={user["id"]}>
                <a rel="noreferrer" href={user["url"]} target="_blank">
                  <img
                    src={user["avatar_url"]}
                    style={{ width: "100px" }}
                    alt={user["login"] + "_avatar"}
                  />
                </a>
                <p className="card-text">{user["login"]}</p>
              </div>
            );
          })}
        </div>
      );
    } else if (appPhase === AppPhaseEnum.initial) {
      return (
        <div className="row">
          <h2>Enter the name you search</h2>
        </div>
      );
    } else if (appPhase === AppPhaseEnum.loading) {
      return (
        <div className="row">
          <h3>Loading...</h3>
        </div>
      );
    } else if (appPhase === AppPhaseEnum.error) {
      return (
        <div className="row">
          <h4 style={{ color: "#ff0000", verticalAlign: "center" }}>
            {errorMsg}
          </h4>
        </div>
      );
    }
  }
}
