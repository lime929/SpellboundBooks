const httpStatus = require("http-status-codes");

exports.PageNotFound = (req, res, next) => {
  console.log("404 error: Page not found");
  let errorCode = httpStatus.StatusCodes.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
};

exports.InternalServerError = (error, req, res, next) => {
  let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${error.stack}`);
  res.status(errorCode);
  res.send(`${errorCode} | Sorry, our site is having a problem`);
};