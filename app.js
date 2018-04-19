/**
 * @Description: Stragery Pattern
 */
import { ErrorHandle } from './error-handle';
import { ErrorLogHandle } from './log-error-handle';
import { ToastNotification } from './toast-notification';

function configureErrorHandle() {
  // const error = new ErrorHandle(new ErrorLogHandle());
  const error = new ErrorHandle(new ToastNotification());
  return error;
}
const errorHandle = configureErrorHandle();
try {
  throw new Error('Dummy Error')
} catch (err) {
  errorHandle.handle('Unknown Error', 'Oops, seems like something went wrong!!!', err);
}


