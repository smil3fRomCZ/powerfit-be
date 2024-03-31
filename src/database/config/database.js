import AppConfiguration from "../../utilities/configuration/AppConfiguration.js";

export default {
  development: {
    username: AppConfiguration.DB_USERNAME,
    password: AppConfiguration.DB_PASSWORD,
    database: AppConfiguration.DB_NAME,
    host: AppConfiguration.DB_HOST,
    dialect: "postgres",
  },
  test: {},
  production: {},
};
