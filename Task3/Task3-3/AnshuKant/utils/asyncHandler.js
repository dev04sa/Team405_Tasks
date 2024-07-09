const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
      Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
  };
  
  export default asyncHandler ;
  
  // const asyncHandler = (fn) => async (req, res, next) => {
  //   try {
  // await fn()
  //   } catch (error) {
  //     res.status(error.code || 500).json({
  //       sucess: false,
  //       message: error.message,
  //     });
  //   }
  // };
  