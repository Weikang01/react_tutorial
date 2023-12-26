const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log(
    "有人请求服务器1了，请求来自于：",
    request.get("Host"),
    "请求的地址是：",
    request.url
  );
  next();
});

app.get("/students", (request, response) => {
  const students = [
    { id: "001", name: "tom", age: 18 },
    { id: "002", name: "jack", age: 19 },
    { id: "003", name: "jane", age: 18 },
  ];
  response.send(students);
});

app.listen(5000, (err) => {
  if (!err)
    console.log(
      "服务器1启动成功了，请求学生信息地址为：http://127.0.0.1:5000/students"
    );
});
