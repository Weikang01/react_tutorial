import React, { Component } from "react";
import PubSub from "pubsub-js";

import { AppPhaseEnum } from "../List/index";

export default class Search extends Component {
  search = async () => {
    PubSub.publish("listState", { appPhase: AppPhaseEnum.loading });
    const {
      keywordElement: { value: keyword },
    } = this;

    // updateAppState({ phase: AppPhaseEnum.loading });

    // fetch 版本1，用then实现
    /*fetch(`http://localhost:3000/api/users?q=${keyword}`)
      .then((response) => {
        console.log("联系服务器成功了");
        return response.json();
      })
      .then((json) => {
        console.log(json);
        let user_list = json["items"].map((item) => {
          return {
            id: item["id"],
            login: item["login"],
            avatar_url: item["avatar_url"],
            url: item["html_url"],
          };
        });
        PubSub.publish("listState", {
          users: user_list,
          appPhase: AppPhaseEnum.listing,
        });
      })
      .catch((err) => {
        console.log("失败了", err);
        PubSub.publish("listState", {
          appPhase: AppPhaseEnum.error,
          errorMsg: err.message,
        });
      });*/

    // fetch 版本2，用async await实现
    try {
      const response = await fetch(
        `http://localhost:3000/api/users?q=${keyword}`
      );
      const json = await response.json();
      let user_list = json["items"].map((item) => {
        return {
          id: item["id"],
          login: item["login"],
          avatar_url: item["avatar_url"],
          url: item["html_url"],
        };
      });
      PubSub.publish("listState", {
        users: user_list,
        appPhase: AppPhaseEnum.listing,
      });
    } catch (err) {
      PubSub.publish("listState", {
        appPhase: AppPhaseEnum.error,
        errorMsg: err.message,
      });
    }
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keywordElement = c)}
            type="text"
            placeholder="Enter the name you search"
          />
          &nbsp;
          <button
            onClick={() => {
              this.search();
            }}
          >
            Search
          </button>
        </div>
      </section>
    );
  }
}
