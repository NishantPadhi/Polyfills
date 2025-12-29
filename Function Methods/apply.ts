/**
 * The only difference between the call() and apply() methods is that the call() method takes arguments separately 
 * but the apply() method takes arguments as an array. See the below example.
 * 
 * printName.apply(myName, ["Nishant Padhi", "India"]);
 */

Function.prototype.myapply = function(obj, args){
  let sym = Symbol();                                     
  obj[sym] = this;
  let res = obj[sym](...(args || [])); 
  delete obj[sym];
  return res;
}