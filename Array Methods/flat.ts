const multiLevelArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];

Array.prototype.myFlat = (depth = 1) => {
  const result = [];

  const flatten = (arr, currDepth) => {
    arr.forEach(item => {
      if (Array.isArray(item) && currDepth < depth) {
        flatten(item, currDepth + 1);
      } else {
        result.push(item);
      }
    });
  };

  flatten(multiLevelArray, 0);
  return result;
};
