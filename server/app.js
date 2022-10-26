const logger = require("morgan");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const indexRouter = require("./router/index");
const usersRouter = require("./router/users");
const articlesRouter = require("./router/articles");

const { whiteList } = require("./constants");

const app = express();

app.use(cors({ origin: whiteList, credentials: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser("whoyaho1!"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/articles", articlesRouter);

app.listen(8081, () => {
  console.log("listening...");
});
