const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    const accessToken = req.cookies["access-token"];
    if (!accessToken) {
      return res
        .status(403)
        .json({ statusCode: 403, statusMessage: "no access token" });
    }
    req.user = jwt.verify(accessToken, "whoyaho1!");
    return next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(419)
        .json({ statusCode: 419, statusMessage: "expired token" });
    }
    return res
      .status(401)
      .json({ stausCode: 401, statusMessage: "invalid token" });
  }
};
