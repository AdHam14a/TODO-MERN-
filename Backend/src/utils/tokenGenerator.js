import jwt from "jsonwebtoken";

const generator = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRY || "7d",
  });
};

const verifier = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export { generator, verifier };

