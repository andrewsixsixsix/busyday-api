const jwt = require("jsonwebtoken");
const { JWTAuthPayload } = require("../../common/typedef/jwt.cjs");

/**
 * @param {JWTAuthPayload} payload
 * @returns {Promise<string>} JWT
 */
const sign = (payload) =>
  new Promise((res, rej) =>
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { algorithm: "HS512", expiresIn: "1m" },
      (err, token) => (err ? rej(err) : res(token))
    )
  );

/**
 * @param {string} token
 * @returns {Promise<JWTAuthPayload>} Decoded JWT payload
 */
const verify = (token) =>
  new Promise((res, rej) =>
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: ["HS512"] },
      (err, decoded) => (err ? rej(err) : res(decoded))
    )
  );

const jwtService = { sign, verify };

module.exports = jwtService;
