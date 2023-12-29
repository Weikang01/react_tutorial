import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

// import Message from "./Messages";
// import News from "./News";
import MyNavLink from "../../components/MyNavLink";
import News from "./News";
import Messages from "./Messages";

export default class Home extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <MyNavLink to="news">News</MyNavLink>
            <MyNavLink to="messages">Messages</MyNavLink>
          </ul>
          <Routes>
            <Route path="news" element={<News />} />
            <Route path="messages/*" element={<Messages />} />
          </Routes>
        </div>
      </div>
    );
  }
}
