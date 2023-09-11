//all middleware is a function that executes during the request response cycle
//if res.statusCode meaning what i set in the controller if that is there then i wanna use that else i want 500
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
  });
};
module.exports = {
  errorHandler,
};
