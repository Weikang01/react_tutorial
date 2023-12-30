import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import Detail from "./Detail";

export default function Messages() {

  const navigate = useNavigate();

  function showDetail_push(id, title) {
    // params
    // navigate(`detail/${id}/${title}`, { replace: false });

    // query
    // navigate(`detail?id=${id}&title=${title}`, { replace: false });

    // state
    navigate("detail", { replace: false, state: { id: id, title: title } });
  }

  function showDetail_replace(id, title) {
    // params
    // navigate(`detail/${id}/${title}`, { replace: true });

    // query
    // navigate(`detail?id=${id}&title=${title}`, { replace: true });

    // state
    navigate("detail", { replace: true, state: { id: id, title: title } });
  }

  const messages = [
    { id: "01", title: "message 1" },
    { id: "02", title: "message 2" },
    { id: "03", title: "message 3" },
  ];

  return (
    <div>
      <ul>
        {messages.map((msg) => {
          return (
            <li key={msg.id}>
              <Link to={`detail/${msg.id}/${msg.title}`}>
                {/* <Link to="detail" state={{ id: msg.id, title: msg.title }}> */}
                {msg.title}
              </Link>
              &nbsp;
              <button onClick={() => showDetail_push(msg.id, msg.title)}>
                push 查看
              </button>
              &nbsp;
              <button onClick={() => showDetail_replace(msg.id, msg.title)}>
                replace 查看
              </button>
            </li>
          );
        })}
      </ul>
      <hr />
      <Routes>
        {/* <Route path="detail/:id/:title" element={<Detail />} /> */}
        <Route path="detail" element={<Detail />} />
        {/* <Route path="detail" element={<Detail />} /> */}
      </Routes>

      <button onClick={() => navigate(-1)}>Go back</button><button onClick={() => navigate(1)}>Go forward</button>
    </div>
  );
}
