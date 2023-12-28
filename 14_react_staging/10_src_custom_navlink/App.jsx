import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About"; // 路由组件
import Home from "./pages/Home";
import Header from "./components/Header"; // 一般组件
import MyNavLink from "./components/MyNavLink";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生html中，靠<a>跳转不同页面 */}
              {/* <a className="list-group-item" href="./about">
                About
              </a>
              <a className="list-group-item active" href="./home">
                Home
              </a> */}
              {/* 在React中靠路由链接实现切换组件 -- 编写路由链接 */}

              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
