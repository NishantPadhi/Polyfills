/**
 * The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled 
  or rejected, with an array of objects that each describes the outcome of each promise.

  However, if and only if an empty iterable is passed as an argument, 
  Promise.allSettled() returns a Promise object that has already been resolved as an empty array.

  For each outcome object, a status string is present. If the status is 'fulfilled', then a value is present. 
  If the status is 'rejected', then a reason is present. The value (or reason) reflects what value each promise was fulfilled (or rejected) with.
 */

/**
 * @param {Array} iterable
 * @return {Promise<Array<{status: 'fulfilled', value: *}|{status: 'rejected', reason: *}>>}
 */
export default function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const results = new Array(iterable.length);
    let pending = iterable.length;

    if (pending === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = {
          status: 'fulfilled',
          value,
        };
      } catch (err) {
        results[index] = {
          status: 'rejected',
          reason: err,
        };
      }

      pending -= 1;
      if (pending === 0) {
        resolve(results);
      }
    });
  });
}
