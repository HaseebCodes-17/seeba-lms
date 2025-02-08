// Api Failed
class ApiFailed extends Error {
  statusCode: number;
  message: string;
  errors: unknown = {};
  success: boolean;

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: unknown = {}
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.success = false;
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      errors: this.errors,
      success: this.success,
    };
  }

  static createError(
    statusCode: number,
    message: string = "Something went wrong",
    errors: unknown = {}
  ) {
    const error = new ApiFailed(statusCode, message, errors);

    return new Response(JSON.stringify(error), {
      status: error.statusCode,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Api Success
class ApiSuccess {
  statusCode: number;
  message: string;
  data: unknown = {};
  success: boolean;

  constructor(
    statusCode: number,
    message: string = "Success",
    data: unknown = {}
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = true;
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      data: this.data,
      success: this.success,
    };
  }

  static createSuccess(
    statusCode: number,
    message: string = "Success",
    data: unknown = {}
  ) {
    const success = new ApiSuccess(statusCode, message, data);

    return new Response(JSON.stringify(success), {
      status: success.statusCode,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Api Error
const ApiError = ApiFailed.createError;

// Api Success
const ApiResponse = ApiSuccess.createSuccess;

export { ApiError, ApiResponse };
