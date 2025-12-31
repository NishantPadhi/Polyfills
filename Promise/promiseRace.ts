/**
 *
  The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects,
  with the value or reason from that promise.
  If the iterable passed is empty, the promise returned will be forever pending.
  If the iterable contains one or more non-promise value and/or an already settled promise, 
  then Promise.race() will resolve to the first of these values found in the iterable.
 */
/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach(async (item) => {
      try {
        const result = await item;
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  });
}
