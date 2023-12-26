import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  render() {
    const { remove_done_items_handler, todo_list, batch_change_handler } =
      this.props;
    const nr_done = todo_list.reduce(
      (prev, currentItem) => prev + (currentItem.done ? 1 : 0),
      0
    );
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={nr_done > 0 && nr_done === todo_list.length}
            onChange={(event) => {
              batch_change_handler(event.target.checked);
            }}
          />
        </label>
        <span>
          <span>已完成{nr_done}</span> 全部{todo_list.length}
        </span>
        <button className="btn btn-danger" onClick={remove_done_items_handler}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
