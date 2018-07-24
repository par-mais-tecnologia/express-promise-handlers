import * as Informational from './responses/informational';
import * as Successful from './responses/successful';
import * as Redirection from './responses/redirection';
import * as ClientError from './responses/client-error';
import * as ServerError from './responses/server-error';

import { ResponseError, Response } from './responses/response';

class Handlers {
  // 100
  static CONTINUE = new Informational.Continue();

  // 200
  static OK = new Successful.Ok();
  static CREATED = new Successful.Created();
  static ACCEPTED = new Successful.Accepted();

  /**
   * When added to a promise chain, will grab current result and send as response on res.
   * @param res Express response.
   * @param handledResponse Success Message (OK, CREATED, etc.)
   * @returns {Function}
   */
  static respondWithResult(res, handledResponse) {
    return (entity) => {
      if (entity) {
        handledResponse.respond(res, entity);
      }
    };
  }

  /**
   * Handle erros. When attached to .catch of a promise,
   * will send an error message to an express response.
   * @param res Express response.
   * @param statusCode Custom status code. Default 500
   * @returns {function(*=)}
   */
  static handleError(res, statusCode = 500) {
    return (err) => {
      if (err instanceof ResponseError) {
        err.respond(res);
      } else if (err instanceof Error) {
        const errError = ResponseError.toError(err, statusCode);
        errError.respond(res);
      } else if (typeof err === 'string') {
        const sError = ResponseError.strToError(err, statusCode);
        sError.respond(res);
      } else {
        res.status(500).json({
          ...err,
          note: 'Errors on routes must use instance of StandardError. Please, adapt to this standard.',
        });
      }
      return null;
    };
  }

  /**
   * Extract a error message message from and error.
   * @returns {{error: string, error_description: string, note: string}}
   */
  static extractError(err) {
    if (err instanceof ResponseError) {
      return err.extract();
    } else if (err instanceof Error) {
      const errError = ResponseError.toError(err);
      return errError.extract();
    } else if (typeof err === 'string') {
      const sError = ResponseError.strToError(err);
      return sError.extract();
    }

    return {
      error: err.message,
      error_description: err.message,
      note: 'Errors on routes must use instance of StandardError. Please, adapt to this standard.',
    };
  }

  static handleEntityNotFound() {
    const nfe = new ClientError.NotFound('Entity not found');
    return (entity) => {
      if (entity === null) {
        throw nfe;
      } else if (entity !== undefined && entity.length !== 0) {
        for (let i = 0; i < entity.length; i += 1) {
          if (entity[i] === null) {
            throw nfe;
          }
        }
      }
      return entity;
    };
  }
}

export {
  Handlers as default,

  Informational,
  Successful,
  Redirection,
  ClientError,
  ServerError,
  Response,
  ResponseError
};

