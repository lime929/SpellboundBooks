const httpStatus = require("http-status-codes");

exports.noPageFound = (req, res) => {
  let errorCode = httpStatus.StatusCodes.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
};

exports.respondInternalError = (error, req, res, next) => {
  let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occured: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our site is having a problem`);
};

exports.PageNotFound = (req, res) => {
  console.log("404 error: Page not found");
  let errorCode = httpStatus.StatusCodes.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
};