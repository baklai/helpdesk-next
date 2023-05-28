const PORT = 3000;
const HOST = 'localhost';
const MONGO_URL = 'mongodb://localhost:27017/helpdesk';
const BCRYPT_SALT = 10;
const TOKEN_EXPIRES_IN = '1h';
const TOKEN_SECRET_KEY = 'HELPDESK_TOKEN_SECRET_KEY';
const FILE_STORAGE_PATH = null;

module.exports = {
  PORT: process.env.PORT || PORT,
  HOST: process.env.HOST || HOST,
  MONGO_URL: process.env.MONGO_URL || MONGO_URL,
  BCRYPT_SALT: Number(process.env.BCRYPT_SALT) || BCRYPT_SALT,
  TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY || TOKEN_SECRET_KEY,
  TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN || TOKEN_EXPIRES_IN,
  TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN || TOKEN_EXPIRES_IN,
  TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY || TOKEN_SECRET_KEY,
  FILE_STORAGE_PATH: process.env.FILE_STORAGE_PATH || FILE_STORAGE_PATH
};
