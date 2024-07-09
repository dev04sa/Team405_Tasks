class ApiError extends Error {
    constructor(
      statusCode,
      message = "Something went Wrong",
      errors = [],
      stack
    ) {
      super(message);
      this.statusCode = statusCode;
      this.data = null;
      this.success = false;
      this.error = errors;
      this.stack = stack;
    }
  }
  
  export default ApiError ;