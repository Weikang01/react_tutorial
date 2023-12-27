import React, { Component } from "react";
import { AppPhaseEnum } from "../../App";
import "./index.css";

export default class List extends Component {
  render() {
    const {
      appState: { users, error },
      appPhase,
    } = this.props;

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
          <h4 style={{ color: "#ff0000", verticalAlign: "center" }}>{error}</h4>
        </div>
      );
    }
  }
}
