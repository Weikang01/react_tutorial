import React, { Component } from "react";
import axios from "axios";

import { AppPhaseEnum } from "../../App";

export default class Search extends Component {
  search = (updateAppState) => {
    const {
      keywordElement: { value: keyword },
    } = this;

    updateAppState({ phase: AppPhaseEnum.loading });

    axios.get(`http://localhost:3000/api/users?q=${keyword}`).then(
      (response) => {
        console.log("成功了");
        let user_list = response.data.items;
        let user_map = user_list.map((item) => {
          return {
            id: item["id"],
            login: item["login"],
            avatar_url: item["avatar_url"],
            url: item["html_url"],
          };
        });
        updateAppState({ users: user_map, phase: AppPhaseEnum.listing });
      },
      (error) => {
        console.log("失败了", error);
        updateAppState({ phase: AppPhaseEnum.error, error: error.message });
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
              this.search(this.props.updateAppState);
            }}
          >
            Search
          </button>
        </div>
      </section>
    );
  }
}
