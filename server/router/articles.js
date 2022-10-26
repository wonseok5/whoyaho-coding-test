const express = require("express");
const { verifyToken } = require("../middlewares");
const { Op } = require("sequelize");
const { Article } = require("../models");
const router = express.Router();

router.post("/", verifyToken, async (req, res) => {
  const articleToSave = req.body;
  await Article.create({
    title: articleToSave.title,
    content: articleToSave.content,
    UserId: req.user.id,
  });
  return res
    .status(201)
    .json({ statusCode: 201, statusMessage: "success in saving article" });
});

router.get("/articles", verifyToken, async (req, res) => {
  const lastArticleId = Number(req.query.lastId);
  const limit = Number(req.query.limit);
  const articles = await Article.findAll({
    where: { id: { [lastArticleId === 0 ? Op.gt : Op.lt]: lastArticleId } },
    order: [["id", "DESC"]],
    limit,
  });
  console.log(limit, lastArticleId, "!!!");
  return res.status(200).json({
    statusCode: 200,
    statusMessage: "success in getting articles",
    articles,
  });
});
module.exports = router;
