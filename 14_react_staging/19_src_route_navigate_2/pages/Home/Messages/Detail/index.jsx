import React from "react";
// import { useParams } from "react-router-dom";  // params
// import { useSearchParams } from "react-router-dom"; // query
import { useLocation } from "react-router-dom"; // state

const detailMessages = [
  { id: "01", title: "message 1", content: "hello" },
  { id: "02", title: "message 2", content: "how are you" },
  { id: "03", title: "message 3", content: "thank you" },
];

export default function Detail() {
  // params
  // const { id, title } = useParams();

  // const [searchParams] = useSearchParams();
  // let id = searchParams.get("id");
  // let title = searchParams.get("title");

  const {
    state: { id, title },
  } = useLocation();

  const findResult = detailMessages.find((msg) => {
    return msg.id === id;
  });

  return (
    <ul>
      <li>ID: {id}</li>
      <li>Title: {title}</li>
      <li>Content: {findResult.content}</li>
    </ul>
  );
}
