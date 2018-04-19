export class ErrorHandle {
  constructor(handler) {
    if (!handler || !handler.handle) {
      throw new Error('Provide handler is valid !');
    }
    this.handler = handler;
  }

  handle(errorTitle, errorBody, errorObject) {
    this.handler.handle(errorTitle, errorBody);
  }
}
