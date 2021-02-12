const Joi = require("joi");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const config = {
  client_id: process.env.CLIENT_ID || "8b603b7245eb0fbd37a9",
  redirect_uri: process.env.REDIRECT_URI || "http://localhost:3000/login",
  client_secret: "c62aa76c4e6ef4f69e437ba83286b6bce1603077",
  proxy_url: process.env.PROXY_URL || "http://localhost:5000/authenticate"
};

const envVarsSchema = Joi.object({
  client_id: Joi.string().required(),
  redirect_uri: Joi.string().required(),
  client_secret: Joi.string(),
  proxy_url: Joi.string().required()
});

const { error } = envVarsSchema.validate(config);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = config;