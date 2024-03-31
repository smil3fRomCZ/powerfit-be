import dotenv from "dotenv";

dotenv.config();

class AppConfiguration {
  // ENV
  static NODE_ENV = process.env.NODE_ENV;

  // SERVER
  static SERVER_PORT = process.env.SERVER_PORT;

  // DB
  static DB_USERNAME = process.env.DB_USERNAME;
  static DB_HOST = process.env.DB_HOST;
  static DB_PASSWORD = process.env.DB_PASSWORD;
  static DB_PORT = process.env.DB_PORT;
  static DB_NAME = process.env.DB_NAME;
}

export default AppConfiguration;
