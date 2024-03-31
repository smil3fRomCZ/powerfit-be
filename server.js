import app from "./src/app.js";
import AppConfiguration from "./src/utilities/configuration/AppConfiguration.js";

const SERVER_PORT = AppConfiguration.SERVER_PORT;

app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port: ${SERVER_PORT}`)
);
