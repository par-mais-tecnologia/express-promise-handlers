class Response {
  status = null;

  constructor(status = 500) {
    this.status = status;
  }

  respond(res, entity) {
    res.status(this.status).json(entity);
  }
}

function ExtendableBuiltin(cls) {
  function ExtendableBuiltinScope() {
    cls.apply(this, arguments); // eslint-disable-line prefer-rest-params
  }

  ExtendableBuiltinScope.prototype = Object.create(cls.prototype);
  Object.setPrototypeOf(ExtendableBuiltinScope, cls);

  return ExtendableBuiltinScope;
}

class ResponseError extends ExtendableBuiltin(Error) {
  status = null;
  error = null;
  errorDescription = null;

  constructor(error, errorDescription, status = 500) {
    super();
    this.status = status;
    this.error = error;
    this.errorDescription = errorDescription;
  }

  message() {
    return this.errorDescription;
  }

  respond(res) {
    res.status(this.status).json(this.extract());
  }

  extract() {
    return {
      error: this.error,
      error_description: this.errorDescription,
    };
  }

  static toError(err, status = 500) {
    return new ResponseError(
      err.message,
      err.message,
      status,
    );
  }

  static strToError(err, status = 500) {
    return new ResponseError(
      err,
      err,
      status,
    );
  }
}

export {
  Response,
  ResponseError,
};
