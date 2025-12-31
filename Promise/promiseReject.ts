/**
 *
  The Promise.reject() static method returns a Promise object that is rejected with a given reason.
*/

export default function promiseReject(reason) {
  return new Promise((_, reject) => reject(reason));
}

