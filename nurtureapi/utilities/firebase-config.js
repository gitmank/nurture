const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function verifyIdToken(token) {
  try {
    if (!token) {
      throw new Error("You are not authorized to access this resource");
    }
    const decodedToken = await admin.auth().verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    return null;
  }
}

module.exports = {
  verifyIdToken,
};