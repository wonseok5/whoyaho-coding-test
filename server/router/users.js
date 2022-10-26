const db = require("../models");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../middlewares");
const { User, UserProfile } = db;
const router = express.Router();

// callback hell resolve
router.get("/", verifyToken, async (req, res) => {
  const targetUser = await User.findOne({
    where: { id: req.user.id },
    include: { model: UserProfile },
  });
  console.log(JSON.stringify(targetUser));
  if (!targetUser) {
    return res
      .status(404)
      .json({ statusCode: 404, statusMessage: "user not found" });
  }
  return res.status(200).json({
    user: targetUser,
    statusCode: 200,
    statusMessage: "success in getting user",
  });
});

router.post("/signup", async (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.genSalt(3, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(password, salt, (err, hashedPassword) => {
      if (err) next(err);
      User.create({ username, password: hashedPassword })
        .then((savedUser) => {
          const token = jwt.sign(
            {
              id: savedUser.id,
              username: savedUser.username,
            },
            "whoyaho1!",
            { expiresIn: 60 * 1000, issuer: "whoyaho" }
          );
          return res
            .status(201)
            .cookie("access-token", token, {
              httpOnly: true,
              secure: false,
            })
            .json({
              savedUser,
              statusCode: 201,
              statusMessage: "success in signing up",
            });
        })
        .catch((err) => {
          next(err);
        });
    });
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const targetUser = await User.findOne({ where: { username } });
  if (!targetUser) {
    return res
      .status(404)
      .json({ statusMessage: "username not found", statusCode: 404 });
  }
  bcrypt.compare(password, targetUser.password, (err, result) => {
    if (err !== undefined || !result) {
      return res.status(403).json({
        statusMessage: "password not correct",
        statusCode: 403,
      });
    }
    const token = jwt.sign(
      {
        id: targetUser.id,
        username: targetUser.username,
      },
      "whoyaho1!",
      { expiresIn: 60 * 1000, issuer: "whoyaho" }
    );
    return res
      .status(201)
      .cookie("access-token", token, { httpOnly: true, secure: false })
      .json({ statusCode: 201, statusMessage: "success in login" });
  });
});

router.post("/logout", verifyToken, async (req, res) => {
  return res.status(201).clearCookie("access-token").json({
    statusCode: 201,
    statusMessage: "success in logout",
  });
});

router.post("/email", verifyToken, async (req, res) => {
  await User.update({ email: req.body.email }, { where: { id: req.user.id } });
  return res
    .status(201)
    .json({ statusCode: 201, statusMessage: "success in update email" });
});

module.exports = router;
