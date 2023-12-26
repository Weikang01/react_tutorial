const express = require("express");
const cors = require("cors");
const app = express();

// app.use((request, response, next) => {
//   console.log(
//     "有人请求服务器1了，请求来自于：",
//     request.get("Host"),
//     "请求的地址是：",
//     request.url
//   );
//   next();
// });

app.get("/users", cors(), (request, response) => {
  const users = {
    total_count: 27531,
    incomplete_results: false,
    items: [
      {
        login: "abc",
        id: 3063240,
        node_id: "MDQ6VXNlcjMwNjMyNDA=",
        avatar_url: "https://avatars.githubusercontent.com/u/3063240?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abc",
        html_url: "https://github.com/abc",
        followers_url: "https://api.github.com/users/abc/followers",
        following_url:
          "https://api.github.com/users/abc/following{/other_user}",
        gists_url: "https://api.github.com/users/abc/gists{/gist_id}",
        starred_url: "https://api.github.com/users/abc/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/abc/subscriptions",
        organizations_url: "https://api.github.com/users/abc/orgs",
        repos_url: "https://api.github.com/users/abc/repos",
        events_url: "https://api.github.com/users/abc/events{/privacy}",
        received_events_url: "https://api.github.com/users/abc/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "liukaijv",
        id: 8773846,
        node_id: "MDQ6VXNlcjg3NzM4NDY=",
        avatar_url: "https://avatars.githubusercontent.com/u/8773846?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/liukaijv",
        html_url: "https://github.com/liukaijv",
        followers_url: "https://api.github.com/users/liukaijv/followers",
        following_url:
          "https://api.github.com/users/liukaijv/following{/other_user}",
        gists_url: "https://api.github.com/users/liukaijv/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/liukaijv/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/liukaijv/subscriptions",
        organizations_url: "https://api.github.com/users/liukaijv/orgs",
        repos_url: "https://api.github.com/users/liukaijv/repos",
        events_url: "https://api.github.com/users/liukaijv/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/liukaijv/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "realslimshanky",
        id: 10004530,
        node_id: "MDQ6VXNlcjEwMDA0NTMw",
        avatar_url: "https://avatars.githubusercontent.com/u/10004530?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/realslimshanky",
        html_url: "https://github.com/realslimshanky",
        followers_url: "https://api.github.com/users/realslimshanky/followers",
        following_url:
          "https://api.github.com/users/realslimshanky/following{/other_user}",
        gists_url:
          "https://api.github.com/users/realslimshanky/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/realslimshanky/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/realslimshanky/subscriptions",
        organizations_url: "https://api.github.com/users/realslimshanky/orgs",
        repos_url: "https://api.github.com/users/realslimshanky/repos",
        events_url:
          "https://api.github.com/users/realslimshanky/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/realslimshanky/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "emoose",
        id: 1755499,
        node_id: "MDQ6VXNlcjE3NTU0OTk=",
        avatar_url: "https://avatars.githubusercontent.com/u/1755499?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/emoose",
        html_url: "https://github.com/emoose",
        followers_url: "https://api.github.com/users/emoose/followers",
        following_url:
          "https://api.github.com/users/emoose/following{/other_user}",
        gists_url: "https://api.github.com/users/emoose/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/emoose/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/emoose/subscriptions",
        organizations_url: "https://api.github.com/users/emoose/orgs",
        repos_url: "https://api.github.com/users/emoose/repos",
        events_url: "https://api.github.com/users/emoose/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/emoose/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcdabcd987",
        id: 2470081,
        node_id: "MDQ6VXNlcjI0NzAwODE=",
        avatar_url: "https://avatars.githubusercontent.com/u/2470081?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcdabcd987",
        html_url: "https://github.com/abcdabcd987",
        followers_url: "https://api.github.com/users/abcdabcd987/followers",
        following_url:
          "https://api.github.com/users/abcdabcd987/following{/other_user}",
        gists_url: "https://api.github.com/users/abcdabcd987/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcdabcd987/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abcdabcd987/subscriptions",
        organizations_url: "https://api.github.com/users/abcdabcd987/orgs",
        repos_url: "https://api.github.com/users/abcdabcd987/repos",
        events_url: "https://api.github.com/users/abcdabcd987/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcdabcd987/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "jym66",
        id: 20449333,
        node_id: "MDQ6VXNlcjIwNDQ5MzMz",
        avatar_url: "https://avatars.githubusercontent.com/u/20449333?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/jym66",
        html_url: "https://github.com/jym66",
        followers_url: "https://api.github.com/users/jym66/followers",
        following_url:
          "https://api.github.com/users/jym66/following{/other_user}",
        gists_url: "https://api.github.com/users/jym66/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/jym66/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/jym66/subscriptions",
        organizations_url: "https://api.github.com/users/jym66/orgs",
        repos_url: "https://api.github.com/users/jym66/repos",
        events_url: "https://api.github.com/users/jym66/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/jym66/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "ABCxFF",
        id: 79597906,
        node_id: "MDQ6VXNlcjc5NTk3OTA2",
        avatar_url: "https://avatars.githubusercontent.com/u/79597906?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/ABCxFF",
        html_url: "https://github.com/ABCxFF",
        followers_url: "https://api.github.com/users/ABCxFF/followers",
        following_url:
          "https://api.github.com/users/ABCxFF/following{/other_user}",
        gists_url: "https://api.github.com/users/ABCxFF/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/ABCxFF/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/ABCxFF/subscriptions",
        organizations_url: "https://api.github.com/users/ABCxFF/orgs",
        repos_url: "https://api.github.com/users/ABCxFF/repos",
        events_url: "https://api.github.com/users/ABCxFF/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/ABCxFF/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abc1763613206",
        id: 30773956,
        node_id: "MDQ6VXNlcjMwNzczOTU2",
        avatar_url: "https://avatars.githubusercontent.com/u/30773956?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abc1763613206",
        html_url: "https://github.com/abc1763613206",
        followers_url: "https://api.github.com/users/abc1763613206/followers",
        following_url:
          "https://api.github.com/users/abc1763613206/following{/other_user}",
        gists_url: "https://api.github.com/users/abc1763613206/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abc1763613206/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abc1763613206/subscriptions",
        organizations_url: "https://api.github.com/users/abc1763613206/orgs",
        repos_url: "https://api.github.com/users/abc1763613206/repos",
        events_url:
          "https://api.github.com/users/abc1763613206/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abc1763613206/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcoathup",
        id: 28278242,
        node_id: "MDQ6VXNlcjI4Mjc4MjQy",
        avatar_url: "https://avatars.githubusercontent.com/u/28278242?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcoathup",
        html_url: "https://github.com/abcoathup",
        followers_url: "https://api.github.com/users/abcoathup/followers",
        following_url:
          "https://api.github.com/users/abcoathup/following{/other_user}",
        gists_url: "https://api.github.com/users/abcoathup/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcoathup/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abcoathup/subscriptions",
        organizations_url: "https://api.github.com/users/abcoathup/orgs",
        repos_url: "https://api.github.com/users/abcoathup/repos",
        events_url: "https://api.github.com/users/abcoathup/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcoathup/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcminiuser",
        id: 141648,
        node_id: "MDQ6VXNlcjE0MTY0OA==",
        avatar_url: "https://avatars.githubusercontent.com/u/141648?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcminiuser",
        html_url: "https://github.com/abcminiuser",
        followers_url: "https://api.github.com/users/abcminiuser/followers",
        following_url:
          "https://api.github.com/users/abcminiuser/following{/other_user}",
        gists_url: "https://api.github.com/users/abcminiuser/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcminiuser/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abcminiuser/subscriptions",
        organizations_url: "https://api.github.com/users/abcminiuser/orgs",
        repos_url: "https://api.github.com/users/abcminiuser/repos",
        events_url: "https://api.github.com/users/abcminiuser/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcminiuser/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "aabc",
        id: 601398,
        node_id: "MDQ6VXNlcjYwMTM5OA==",
        avatar_url: "https://avatars.githubusercontent.com/u/601398?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/aabc",
        html_url: "https://github.com/aabc",
        followers_url: "https://api.github.com/users/aabc/followers",
        following_url:
          "https://api.github.com/users/aabc/following{/other_user}",
        gists_url: "https://api.github.com/users/aabc/gists{/gist_id}",
        starred_url: "https://api.github.com/users/aabc/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/aabc/subscriptions",
        organizations_url: "https://api.github.com/users/aabc/orgs",
        repos_url: "https://api.github.com/users/aabc/repos",
        events_url: "https://api.github.com/users/aabc/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/aabc/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcsds",
        id: 2694381,
        node_id: "MDQ6VXNlcjI2OTQzODE=",
        avatar_url: "https://avatars.githubusercontent.com/u/2694381?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcsds",
        html_url: "https://github.com/abcsds",
        followers_url: "https://api.github.com/users/abcsds/followers",
        following_url:
          "https://api.github.com/users/abcsds/following{/other_user}",
        gists_url: "https://api.github.com/users/abcsds/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcsds/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/abcsds/subscriptions",
        organizations_url: "https://api.github.com/users/abcsds/orgs",
        repos_url: "https://api.github.com/users/abcsds/repos",
        events_url: "https://api.github.com/users/abcsds/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcsds/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "wanesta",
        id: 8255532,
        node_id: "MDQ6VXNlcjgyNTU1MzI=",
        avatar_url: "https://avatars.githubusercontent.com/u/8255532?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/wanesta",
        html_url: "https://github.com/wanesta",
        followers_url: "https://api.github.com/users/wanesta/followers",
        following_url:
          "https://api.github.com/users/wanesta/following{/other_user}",
        gists_url: "https://api.github.com/users/wanesta/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/wanesta/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/wanesta/subscriptions",
        organizations_url: "https://api.github.com/users/wanesta/orgs",
        repos_url: "https://api.github.com/users/wanesta/repos",
        events_url: "https://api.github.com/users/wanesta/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/wanesta/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "letranloc",
        id: 5153690,
        node_id: "MDQ6VXNlcjUxNTM2OTA=",
        avatar_url: "https://avatars.githubusercontent.com/u/5153690?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/letranloc",
        html_url: "https://github.com/letranloc",
        followers_url: "https://api.github.com/users/letranloc/followers",
        following_url:
          "https://api.github.com/users/letranloc/following{/other_user}",
        gists_url: "https://api.github.com/users/letranloc/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/letranloc/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/letranloc/subscriptions",
        organizations_url: "https://api.github.com/users/letranloc/orgs",
        repos_url: "https://api.github.com/users/letranloc/repos",
        events_url: "https://api.github.com/users/letranloc/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/letranloc/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcijkxyz",
        id: 2009649,
        node_id: "MDQ6VXNlcjIwMDk2NDk=",
        avatar_url: "https://avatars.githubusercontent.com/u/2009649?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcijkxyz",
        html_url: "https://github.com/abcijkxyz",
        followers_url: "https://api.github.com/users/abcijkxyz/followers",
        following_url:
          "https://api.github.com/users/abcijkxyz/following{/other_user}",
        gists_url: "https://api.github.com/users/abcijkxyz/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcijkxyz/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abcijkxyz/subscriptions",
        organizations_url: "https://api.github.com/users/abcijkxyz/orgs",
        repos_url: "https://api.github.com/users/abcijkxyz/repos",
        events_url: "https://api.github.com/users/abcijkxyz/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcijkxyz/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcdw",
        id: 1218615,
        node_id: "MDQ6VXNlcjEyMTg2MTU=",
        avatar_url: "https://avatars.githubusercontent.com/u/1218615?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcdw",
        html_url: "https://github.com/abcdw",
        followers_url: "https://api.github.com/users/abcdw/followers",
        following_url:
          "https://api.github.com/users/abcdw/following{/other_user}",
        gists_url: "https://api.github.com/users/abcdw/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcdw/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/abcdw/subscriptions",
        organizations_url: "https://api.github.com/users/abcdw/orgs",
        repos_url: "https://api.github.com/users/abcdw/repos",
        events_url: "https://api.github.com/users/abcdw/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcdw/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abc123info",
        id: 143333826,
        node_id: "U_kgDOCIsZwg",
        avatar_url: "https://avatars.githubusercontent.com/u/143333826?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abc123info",
        html_url: "https://github.com/abc123info",
        followers_url: "https://api.github.com/users/abc123info/followers",
        following_url:
          "https://api.github.com/users/abc123info/following{/other_user}",
        gists_url: "https://api.github.com/users/abc123info/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abc123info/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abc123info/subscriptions",
        organizations_url: "https://api.github.com/users/abc123info/orgs",
        repos_url: "https://api.github.com/users/abc123info/repos",
        events_url: "https://api.github.com/users/abc123info/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abc123info/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "chenhaomingbob",
        id: 18526439,
        node_id: "MDQ6VXNlcjE4NTI2NDM5",
        avatar_url: "https://avatars.githubusercontent.com/u/18526439?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/chenhaomingbob",
        html_url: "https://github.com/chenhaomingbob",
        followers_url: "https://api.github.com/users/chenhaomingbob/followers",
        following_url:
          "https://api.github.com/users/chenhaomingbob/following{/other_user}",
        gists_url:
          "https://api.github.com/users/chenhaomingbob/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/chenhaomingbob/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/chenhaomingbob/subscriptions",
        organizations_url: "https://api.github.com/users/chenhaomingbob/orgs",
        repos_url: "https://api.github.com/users/chenhaomingbob/repos",
        events_url:
          "https://api.github.com/users/chenhaomingbob/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/chenhaomingbob/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcz316",
        id: 60607547,
        node_id: "MDQ6VXNlcjYwNjA3NTQ3",
        avatar_url: "https://avatars.githubusercontent.com/u/60607547?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcz316",
        html_url: "https://github.com/abcz316",
        followers_url: "https://api.github.com/users/abcz316/followers",
        following_url:
          "https://api.github.com/users/abcz316/following{/other_user}",
        gists_url: "https://api.github.com/users/abcz316/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcz316/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/abcz316/subscriptions",
        organizations_url: "https://api.github.com/users/abcz316/orgs",
        repos_url: "https://api.github.com/users/abcz316/repos",
        events_url: "https://api.github.com/users/abcz316/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcz316/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "we-taper",
        id: 6148706,
        node_id: "MDQ6VXNlcjYxNDg3MDY=",
        avatar_url: "https://avatars.githubusercontent.com/u/6148706?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/we-taper",
        html_url: "https://github.com/we-taper",
        followers_url: "https://api.github.com/users/we-taper/followers",
        following_url:
          "https://api.github.com/users/we-taper/following{/other_user}",
        gists_url: "https://api.github.com/users/we-taper/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/we-taper/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/we-taper/subscriptions",
        organizations_url: "https://api.github.com/users/we-taper/orgs",
        repos_url: "https://api.github.com/users/we-taper/repos",
        events_url: "https://api.github.com/users/we-taper/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/we-taper/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcfy2",
        id: 5327677,
        node_id: "MDQ6VXNlcjUzMjc2Nzc=",
        avatar_url: "https://avatars.githubusercontent.com/u/5327677?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcfy2",
        html_url: "https://github.com/abcfy2",
        followers_url: "https://api.github.com/users/abcfy2/followers",
        following_url:
          "https://api.github.com/users/abcfy2/following{/other_user}",
        gists_url: "https://api.github.com/users/abcfy2/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcfy2/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/abcfy2/subscriptions",
        organizations_url: "https://api.github.com/users/abcfy2/orgs",
        repos_url: "https://api.github.com/users/abcfy2/repos",
        events_url: "https://api.github.com/users/abcfy2/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcfy2/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcnews",
        id: 9651515,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjk2NTE1MTU=",
        avatar_url: "https://avatars.githubusercontent.com/u/9651515?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcnews",
        html_url: "https://github.com/abcnews",
        followers_url: "https://api.github.com/users/abcnews/followers",
        following_url:
          "https://api.github.com/users/abcnews/following{/other_user}",
        gists_url: "https://api.github.com/users/abcnews/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcnews/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/abcnews/subscriptions",
        organizations_url: "https://api.github.com/users/abcnews/orgs",
        repos_url: "https://api.github.com/users/abcnews/repos",
        events_url: "https://api.github.com/users/abcnews/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcnews/received_events",
        type: "Organization",
        site_admin: false,
        score: 1,
      },
      {
        login: "abc873693",
        id: 15196250,
        node_id: "MDQ6VXNlcjE1MTk2MjUw",
        avatar_url: "https://avatars.githubusercontent.com/u/15196250?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abc873693",
        html_url: "https://github.com/abc873693",
        followers_url: "https://api.github.com/users/abc873693/followers",
        following_url:
          "https://api.github.com/users/abc873693/following{/other_user}",
        gists_url: "https://api.github.com/users/abc873693/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abc873693/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abc873693/subscriptions",
        organizations_url: "https://api.github.com/users/abc873693/orgs",
        repos_url: "https://api.github.com/users/abc873693/repos",
        events_url: "https://api.github.com/users/abc873693/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abc873693/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "ozoli",
        id: 818406,
        node_id: "MDQ6VXNlcjgxODQwNg==",
        avatar_url: "https://avatars.githubusercontent.com/u/818406?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/ozoli",
        html_url: "https://github.com/ozoli",
        followers_url: "https://api.github.com/users/ozoli/followers",
        following_url:
          "https://api.github.com/users/ozoli/following{/other_user}",
        gists_url: "https://api.github.com/users/ozoli/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/ozoli/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/ozoli/subscriptions",
        organizations_url: "https://api.github.com/users/ozoli/orgs",
        repos_url: "https://api.github.com/users/ozoli/repos",
        events_url: "https://api.github.com/users/ozoli/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/ozoli/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abchk1234",
        id: 5509426,
        node_id: "MDQ6VXNlcjU1MDk0MjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/5509426?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abchk1234",
        html_url: "https://github.com/abchk1234",
        followers_url: "https://api.github.com/users/abchk1234/followers",
        following_url:
          "https://api.github.com/users/abchk1234/following{/other_user}",
        gists_url: "https://api.github.com/users/abchk1234/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abchk1234/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abchk1234/subscriptions",
        organizations_url: "https://api.github.com/users/abchk1234/orgs",
        repos_url: "https://api.github.com/users/abchk1234/repos",
        events_url: "https://api.github.com/users/abchk1234/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abchk1234/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "liuhuapiaoyuan",
        id: 8020726,
        node_id: "MDQ6VXNlcjgwMjA3MjY=",
        avatar_url: "https://avatars.githubusercontent.com/u/8020726?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/liuhuapiaoyuan",
        html_url: "https://github.com/liuhuapiaoyuan",
        followers_url: "https://api.github.com/users/liuhuapiaoyuan/followers",
        following_url:
          "https://api.github.com/users/liuhuapiaoyuan/following{/other_user}",
        gists_url:
          "https://api.github.com/users/liuhuapiaoyuan/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/liuhuapiaoyuan/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/liuhuapiaoyuan/subscriptions",
        organizations_url: "https://api.github.com/users/liuhuapiaoyuan/orgs",
        repos_url: "https://api.github.com/users/liuhuapiaoyuan/repos",
        events_url:
          "https://api.github.com/users/liuhuapiaoyuan/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/liuhuapiaoyuan/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcdan",
        id: 15849319,
        node_id: "MDQ6VXNlcjE1ODQ5MzE5",
        avatar_url: "https://avatars.githubusercontent.com/u/15849319?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcdan",
        html_url: "https://github.com/abcdan",
        followers_url: "https://api.github.com/users/abcdan/followers",
        following_url:
          "https://api.github.com/users/abcdan/following{/other_user}",
        gists_url: "https://api.github.com/users/abcdan/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcdan/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/abcdan/subscriptions",
        organizations_url: "https://api.github.com/users/abcdan/orgs",
        repos_url: "https://api.github.com/users/abcdan/repos",
        events_url: "https://api.github.com/users/abcdan/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcdan/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abchatra",
        id: 6107272,
        node_id: "MDQ6VXNlcjYxMDcyNzI=",
        avatar_url: "https://avatars.githubusercontent.com/u/6107272?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abchatra",
        html_url: "https://github.com/abchatra",
        followers_url: "https://api.github.com/users/abchatra/followers",
        following_url:
          "https://api.github.com/users/abchatra/following{/other_user}",
        gists_url: "https://api.github.com/users/abchatra/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abchatra/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abchatra/subscriptions",
        organizations_url: "https://api.github.com/users/abchatra/orgs",
        repos_url: "https://api.github.com/users/abchatra/repos",
        events_url: "https://api.github.com/users/abchatra/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abchatra/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcd567a",
        id: 28452511,
        node_id: "MDQ6VXNlcjI4NDUyNTEx",
        avatar_url: "https://avatars.githubusercontent.com/u/28452511?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcd567a",
        html_url: "https://github.com/abcd567a",
        followers_url: "https://api.github.com/users/abcd567a/followers",
        following_url:
          "https://api.github.com/users/abcd567a/following{/other_user}",
        gists_url: "https://api.github.com/users/abcd567a/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcd567a/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/abcd567a/subscriptions",
        organizations_url: "https://api.github.com/users/abcd567a/orgs",
        repos_url: "https://api.github.com/users/abcd567a/repos",
        events_url: "https://api.github.com/users/abcd567a/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcd567a/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
      {
        login: "abcdsds",
        id: 50533198,
        node_id: "MDQ6VXNlcjUwNTMzMTk4",
        avatar_url: "https://avatars.githubusercontent.com/u/50533198?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/abcdsds",
        html_url: "https://github.com/abcdsds",
        followers_url: "https://api.github.com/users/abcdsds/followers",
        following_url:
          "https://api.github.com/users/abcdsds/following{/other_user}",
        gists_url: "https://api.github.com/users/abcdsds/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/abcdsds/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/abcdsds/subscriptions",
        organizations_url: "https://api.github.com/users/abcdsds/orgs",
        repos_url: "https://api.github.com/users/abcdsds/repos",
        events_url: "https://api.github.com/users/abcdsds/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/abcdsds/received_events",
        type: "User",
        site_admin: false,
        score: 1,
      },
    ],
  };
  response.send(users);
});

app.listen(5000, (err) => {
  if (!err)
    console.log(
      "Github模拟数据服务器启动成功了，请求用户信息地址为：http://127.0.0.1:5000/users"
    );
});
