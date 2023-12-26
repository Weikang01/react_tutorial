import React, { Component } from "react";
import PropTypes from "prop-types";

import Item from "../Item";
import "./index.css";

export default class List extends Component {
  static porpTypes = {
    todo_list: PropTypes.array.isRequired,
    item_change_handler: PropTypes.func.isRequired,
  };

  render() {
    // console.log(this.props.todo_list)
    return (
      <ul className="todo-main">
        {this.props.todo_list.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              item_change_handler={this.props.item_change_handler}
            />
          );
        })}
      </ul>
    );
  }
}
