const { verifyIdToken } = require("./firebase-config.js");

async function validateToken(req, res, next, token) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = await verifyIdToken(token);
    req.user = {
      name: decodedToken.name,
      uid: decodedToken.uid,
      email: decodedToken.email,
    };
    next();
  } catch (error) {
    res.status(401).send("You are not authorized to access this resource");
  }
}

module.exports = {
  validateToken,
};