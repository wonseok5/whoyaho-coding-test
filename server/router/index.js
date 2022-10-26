const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ statusMessage: "hello" });
});

router.get("/hello", (req, res) => {
  res.json({ statusMessage: "hello world" });
});
module.exports = router;
