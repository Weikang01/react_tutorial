import React from "react";
import { useParams } from "react-router-dom";

const detailMessages = [
  { id: "01", title: "message 1", content: "hello" },
  { id: "02", title: "message 2", content: "how are you" },
  { id: "03", title: "message 3", content: "thank you" },
];

export default function Detail() {
  const { id, title } = useParams();
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
