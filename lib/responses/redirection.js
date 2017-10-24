import { Response } from './response';

class MultipleChoices extends Response {
  constructor() {
    super(300);
  }
}

class MovedPermanently extends Response {
  constructor() {
    super(301);
  }
}

class Found extends Response {
  constructor() {
    super(302);
  }
}

class SeeOther extends Response {
  constructor() {
    super(303);
  }
}

class NotModified extends Response {
  constructor() {
    super(304);
  }
}

class UseProxy extends Response {
  constructor() {
    super(305);
  }
}

class TemporaryRedirect extends Response {
  constructor() {
    super(307);
  }
}

export {
  MultipleChoices,
  MovedPermanently,
  Found,
  SeeOther,
  NotModified,
  UseProxy,
  TemporaryRedirect,
};
