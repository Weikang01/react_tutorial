import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";

import Detail from "./Detail";

export default class Messages extends Component {
  state = {
    messages: [
      { id: "01", title: "message 1" },
      { id: "02", title: "message 2" },
      { id: "03", title: "message 3" },
    ],
  };
  render() {
    const { messages } = this.state;

    return (
      <div>
        <ul>
          {messages.map((msg) => {
            return (
              <li key={"link_" + msg.id}>
                <Link to={`${msg.id}/${msg.title}`}>{msg.title}</Link>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr />
        <Routes>
          <Route path=":id/:title" element={<Detail />} />
        </Routes>
      </div>
    );
  }
}
