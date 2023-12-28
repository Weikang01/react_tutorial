import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        className={(navData) =>
          navData.isActive ? "list-group-item demo" : "list-group-item"
        }
        {...this.props}
      />
    );
  }
}
