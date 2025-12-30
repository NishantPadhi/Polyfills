/**
 * The Array.prototype.concat method on JavaScript arrays is used to merge two or more arrays. 
 * This method does not change the existing arrays, but instead returns a new array.
 * 
    [1, 2, 3].myConcat([4, 5, 6]); // [1, 2, 3, 4, 5, 6]
    [1, 2, 3].myConcat(4, 5, 6); // [1, 2, 3, 4, 5, 6]
    [1, 2, 3].myConcat(4, [5, 6]); // [1, 2, 3, 4, 5, 6]
 */

Array.prototype.myConcat = function(...args) {
  let result = [...this];
  for (let arg of args) {
    if (Array.isArray(arg)) {
      for (let item of arg) {
        if (item !== undefined) {
          result.push(item);
        }
      }
    } else {
      result.push(arg);
    }
  }
  return result;
}