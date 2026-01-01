/**
 *  The Promise.resolve() static method "resolves" a given value to a Promise. If the value is:

    A native promise, return that promise.
    A non-thenable, return a promise that is already fulfilled with that value.
    A thenable, Promise.resolve() will call the then() method and pass a pair of resolving functions as arguments. 
    A promise that has the same state as the thenable is returned.
 */

/**
 * @param {*} value
 * @returns Promise
 */
export default function promiseResolve(value) {
  if (value instanceof Promise) {
    return value;
  }

  return new Promise((resolve) => resolve(value));
}
