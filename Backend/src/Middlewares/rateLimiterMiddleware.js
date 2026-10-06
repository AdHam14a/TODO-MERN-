import rateLimit from "../Config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const userIP = req.ip || req.headers["x-forwarded-for"] || "127.0.0.1";
    const { success } = await rateLimit.limit(userIP);
    if (!success) {
      return res.status(429).json({ message: "Too many requests" });
    }
    next();
  } catch (error) {
    console.log("Rate limiter", error);
    next(error);
  }
};

export default rateLimiter;
