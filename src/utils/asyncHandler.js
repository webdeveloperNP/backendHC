const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
    // //try-catch version of above code
    // try {
    //   requestHandler(req, res, next);
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

export default asyncHandler;
