const express = require("express");

const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  console.log(req.url);
  return res.json({ message: "hello world" });
});

app.listen(3000, () => {
  console.log("listening...");
});
