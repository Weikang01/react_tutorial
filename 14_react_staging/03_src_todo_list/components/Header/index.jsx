import React, { Component } from "react";
import { nanoid } from "nanoid";

import "./index.css";

export default class Header extends Component {
  keyUpHandler = (event) => {
    if (event.keyCode === 13) {
      if (event.target.value.trim() === "") {
        alert("输入不能为空");
        return;
      }

      this.props.new_item_handler({
        id: nanoid(),
        name: event.target.value,
        done: false,
      });
      event.target.value = "";
    }
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.keyUpHandler}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
