export class ErrorLogHandle {
  handle(errorTitle, errorBody) {
    console.error(errorTitle);
    console.log(errorBody);
  }
}
