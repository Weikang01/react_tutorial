const express = require("express");
const app = express();

app.use((request, response, next) => {
  console.log("有人请求服务器2了");
  next();
});

app.get("/cars", (request, response) => {
  const cars = [
    { id: "001", name: "benz", age: 200 },
    { id: "002", name: "mazda", age: 80 },
    { id: "003", name: "bmw", price: 120 },
  ];
  response.send(cars);
});

app.listen(5001, (err) => {
  if (!err)
    console.log(
      "服务器2启动成功了，请求汽车信息地址为：http://127.0.0.1:5001/cars"
    );
});
