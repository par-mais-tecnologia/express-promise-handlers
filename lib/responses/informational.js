import { Response } from './response';

class Continue extends Response {
  constructor() {
    super(100);
  }
}

class SwitchingProtocols extends Response {
  constructor() {
    super(101);
  }
}

export {
  Continue,
  SwitchingProtocols,
};
