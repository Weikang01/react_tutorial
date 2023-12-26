import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = {
    active: false,
  };

  MouseHandler = (flag) => {
    return () => {
      this.setState({ active: flag });
    };
  };

  CheckHandler = (id, item_change_handler) => {
    return (event) => {
      item_change_handler(id, event.target.checked, false);
    };
  };

  deleteItemHandler = (id, item_change_handler) => {
    item_change_handler(id, false, true);
  };

  render() {
    // console.log(this.props)
    const { id, name, done, item_change_handler } = this.props;
    const { active } = this.state;

    return (
      <li
        onMouseEnter={this.MouseHandler(true)}
        onMouseLeave={this.MouseHandler(false)}
        style={{ backgroundColor: active ? "#eee" : "#fff" }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.CheckHandler(id, item_change_handler)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: active ? "block" : "none" }}
          onClick={() => {
            if (window.confirm("确定删除吗？"))
              item_change_handler(id, false, true);
          }}
        >
          删除
        </button>
      </li>
    );
  }
}
