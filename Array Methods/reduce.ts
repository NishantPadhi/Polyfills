
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (initialValue === null || initialValue === undefined && !this.length) {
    throw("Error");
  }
  let result = this[0] ?? 0;
  let startingIndex = (initialValue === null || initialValue === undefined) ? 1 : 0;

  for(let index = startingIndex; index < this.length; index++) {
    if (this[index] !== null && this[index] !== undefined) {
      result = callbackFn(result, this[index], index, this);
    }
  }
  return result;
};