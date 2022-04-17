const jose = require("jose");
// const jwt = require("jsonwebtoken");

// const base64 = (str) => {
//   return Buffer.from(str, "utf-8").toString("base64");
// };

const meiliSearchApikey =
  "etPXYLEE4c65af44227522c68d5897494df3f0316499d11c93c062e2775d7113423da6d5";

const payload = {
  apiKeyPrefix: meiliSearchApikey.slice(0, 8),
  searchRules: {
    tenant_token: {
      filter: "user = Zia",
    },
  },
};

// const token = jwt.sign(payload, meiliSearchApikey);
// console.log(token);

const tenantToken = new jose.SignJWT(payload);
tenantToken.setProtectedHeader({
  alg: "HS256",
  typ: "JWT",
});

(async () => {
  var enc = new TextEncoder();
  const tt = await tenantToken.sign(enc.encode(meiliSearchApikey));
  console.log(tt);
})();
