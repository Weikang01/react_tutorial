import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";

export default class App extends Component {
  static porpTypes = {
    new_item_handler: PropTypes.func.isRequired,
  };

  state = {
    todo_list: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: false },
      { id: "004", name: "逛街", done: true },
    ],
  };

  newItemHandler = (new_item) => {
    this.setState({ todo_list: [new_item, ...this.state.todo_list] });
  };

  itemStateChangeHandler = (item_id, done, remove) => {
    let { todo_list } = this.state;
    if (remove === true) {
      todo_list = todo_list.filter((item) => {
        return item.id !== item_id;
      });
    } else {
      todo_list = todo_list.map((item) => {
        if (item.id === item_id) return { ...item, done: done };
        else return item;
      });
    }

    this.setState({ todo_list: todo_list });
  };

  batchStateChangeHandler = (done) => {
    let { todo_list } = this.state;
    todo_list = todo_list.map((item) => {
      return { ...item, done: done };
    });
    this.setState({ todo_list: todo_list });
  };

  removeDoneItemsHandler = () => {
    const { todo_list } = this.state;
    this.setState({
      todo_list: todo_list.filter((item) => {
        return !item.done;
      }),
    });
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header new_item_handler={this.newItemHandler} />
          <List
            todo_list={this.state.todo_list}
            item_change_handler={this.itemStateChangeHandler}
          />
          <Footer
            todo_list={this.state.todo_list}
            remove_done_items_handler={this.removeDoneItemsHandler}
            batch_change_handler={this.batchStateChangeHandler}
          />
        </div>
      </div>
    );
  }
}
