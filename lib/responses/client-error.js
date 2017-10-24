import { ResponseError } from './response';

class BadRequest extends ResponseError {
  constructor(errorDescription) {
    super('Bad Request', errorDescription, 400);
  }
}

class Unauthorized extends ResponseError {
  constructor(errorDescription) {
    super('Unauthorized', errorDescription, 401);
  }
}

class PaymentRequired extends ResponseError {
  constructor(errorDescription) {
    super('Payment Required', errorDescription, 402);
  }
}

class Forbidden extends ResponseError {
  constructor(errorDescription) {
    super('Forbidden', errorDescription, 403);
  }
}

class NotFound extends ResponseError {
  constructor(errorDescription) {
    super('Not Found', errorDescription, 404);
  }
}

class MethodNotAllowed extends ResponseError {
  constructor(errorDescription) {
    super('Method Not Allowed', errorDescription, 405);
  }
}

class NotAcceptable extends ResponseError {
  constructor(errorDescription) {
    super('Not Acceptable', errorDescription, 406);
  }
}

class ProxyAuthenticationRequired extends ResponseError {
  constructor(errorDescription) {
    super('Proxy Authentication Required', errorDescription, 407);
  }
}

class RequestTimeout extends ResponseError {
  constructor(errorDescription) {
    super('Request Timeout', errorDescription, 408);
  }
}

class Conflict extends ResponseError {
  constructor(errorDescription) {
    super('Conflict', errorDescription, 409);
  }
}

class Gone extends ResponseError {
  constructor(errorDescription) {
    super('Gone', errorDescription, 410);
  }
}

class LengthRequired extends ResponseError {
  constructor(errorDescription) {
    super('Length Required', errorDescription, 411);
  }
}

class PreconditionFailed extends ResponseError {
  constructor(errorDescription) {
    super('Precondition Failed', errorDescription, 412);
  }
}

class RequestEntityTooLarge extends ResponseError {
  constructor(errorDescription) {
    super('Request Entity Too Large', errorDescription, 413);
  }
}

class RequestURITooLong extends ResponseError {
  constructor(errorDescription) {
    super('Request-URI Too Long', errorDescription, 414);
  }
}

class UnsupportedMediaType extends ResponseError {
  constructor(errorDescription) {
    super('Unsupported Media Type', errorDescription, 415);
  }
}

class RequestedRangeNotSatisfiable extends ResponseError {
  constructor(errorDescription) {
    super('Requested Range Not Satisfiable', errorDescription, 416);
  }
}

class ExpectationFailed extends ResponseError {
  constructor(errorDescription) {
    super('Expectation Failed', errorDescription, 417);
  }
}

export {
  BadRequest,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Conflict,
  Gone,
  LengthRequired,
  PreconditionFailed,
  RequestEntityTooLarge,
  RequestURITooLong,
  UnsupportedMediaType,
  RequestedRangeNotSatisfiable,
  ExpectationFailed,
};
