import dotenv from "dotenv";

dotenv.config();

class AppConfiguration {
  // ENV
  static NODE_ENV = process.env.NODE_ENV;

  // SERVER
  static SERVER_PORT = process.env.SERVER_PORT;

  // DB
}

export default AppConfiguration;
