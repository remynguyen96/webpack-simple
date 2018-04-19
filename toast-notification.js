import * as toastr from 'toastr';

export class ToastNotification {
  handle(title, body) {
    toastr.error(`${title} ---- ${body}`);
  }
}
