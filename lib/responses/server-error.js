import { ResponseError } from './response';

class ServerError extends ResponseError {
  constructor(errorDescription) {
    super('Server Error', errorDescription, 500);
  }
}

class NotImplemented extends ResponseError {
  constructor(errorDescription) {
    super('Not Implemented', errorDescription, 501);
  }
}

class BadGateway extends ResponseError {
  constructor(errorDescription) {
    super('Bad Gateway', errorDescription, 502);
  }
}

class ServiceUnavailable extends ResponseError {
  constructor(errorDescription) {
    super('Service Unavailable', errorDescription, 503);
  }
}

class GatewayTimeout extends ResponseError {
  constructor(errorDescription) {
    super('Gateway Timeout', errorDescription, 504);
  }
}

class HTTPVersionNotSupported extends ResponseError {
  constructor(errorDescription) {
    super('HTTP Version Not Supported', errorDescription, 505);
  }
}

export {
  ServerError,
  NotImplemented,
  BadGateway,
  ServiceUnavailable,
  GatewayTimeout,
  HTTPVersionNotSupported,
};
