import { Response } from './response';

class Ok extends Response {
  constructor() {
    super(200);
  }
}

class Created extends Response {
  constructor() {
    super(201);
  }
}

class Accepted extends Response {
  constructor() {
    super(202);
  }
}

class NonAuthoritativeInformation extends Response {
  constructor() {
    super(203);
  }
}

class NoContent extends Response {
  constructor() {
    super(204);
  }
}

class ResetContent extends Response {
  constructor() {
    super(205);
  }
}

class PartialContent extends Response {
  constructor() {
    super(206);
  }
}

export {
  Ok,
  Created,
  Accepted,
  NonAuthoritativeInformation,
  NoContent,
  ResetContent,
  PartialContent,
};
