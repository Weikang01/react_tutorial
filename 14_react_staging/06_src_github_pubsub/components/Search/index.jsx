import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

import { AppPhaseEnum } from "../List/index";

export default class Search extends Component {
  search = () => {
    PubSub.publish("listState", { appPhase: AppPhaseEnum.loading });
    const {
      keywordElement: { value: keyword },
    } = this;

    // updateAppState({ phase: AppPhaseEnum.loading });

    axios.get(`http://localhost:3000/api/users?q=${keyword}`).then(
      (response) => {
        console.log("成功了");
        let user_list = response.data.items;
        user_list = user_list.map((item) => {
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
        // updateAppState({ users: user_map, phase: AppPhaseEnum.listing });
      },
      (error) => {
        console.log("失败了", error);
        PubSub.publish("listState", {
          appPhase: AppPhaseEnum.error,
          errorMsg: error.message,
        });
        // updateAppState({ phase: AppPhaseEnum.error, error: error.message });
      }
    );
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
