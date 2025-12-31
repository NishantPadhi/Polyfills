/**
 * 
  Promise.all() is a method that takes an iterable of elements (usually Promises) as an input, 
  and returns a single Promise that resolves to an array of the results of the input promises. 
  This returned promise will resolve when all of the input's promises have resolved, or 
  if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting 
  or non-promises throwing an error, and will reject with this first rejection message / error.
 */

/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}