const input = [1,2,3,4,5];

/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {boolean}
 */
Array.prototype.myEvery = function (callbackFn, thisArg) {
  const len = this.length;
  for (let index = 0; index < len; index++) {
      const element = this[index];
      if (!callbackFn.call(thisArg, element, index, this)) {
        return false;
      }
  }
  return true;
};