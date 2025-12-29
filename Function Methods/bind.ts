/**
 * Instead of invoking the printName() method directly, the bind() method 
 * returns us a function which we can invoke later on.
 * 
 * let person = {
    firstname: "Nishant",
    lastname: "Padhi"
  }

  let printName = function (country) {
    console.log(this.firstname + " " + this.lastname + " from "+ country);
  }

  let newPrintName = printName.mybind(person, "India");
  newPrintName("Bharat");
 */

Function.prototype.mybind = function(object,...args){
  let func = this;
  return function (...args1) {
    return func.apply(object, [...args, ...args1]);
  }
}