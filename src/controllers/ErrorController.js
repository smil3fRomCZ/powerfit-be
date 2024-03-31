import AppConfiguration from "../utilities/configuration/AppConfiguration.js";

class ErrorController {
  handleDevelopmentErrors = (err, req, res) =>
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      trace: err.stack,
    });

  handleProductionErrors = (err, req, res) => {
    if (err.isOperational) {
      return res
        .status(err.statusCode)
        .json({ status: err.status, message: err.message });
    }
    return res
      .status(500)
      .json({ status: "Error", message: "Internal server error" });
  };

  handlerErrorMessages = (err, req, res, next) => {
    if (AppConfiguration.NODE_ENV === "development") {
      this.handleDevelopmentErrors(err, req, res);
    } else if (AppConfiguration.NODE_ENV === "production") {
      this.handleProductionErrors(err, req, res);
    }
  };
}

export default ErrorController;
