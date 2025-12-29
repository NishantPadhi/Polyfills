/**
 * function.call(object, params1, params2,..... paramsN)
 * 
 * Example without using call:

   function show() {
    console.log(this.msg);
   }

   show(); // logs undefined

   Example using call:

   const obj = {msg: "Called using call"};

   show.call(obj); // Called using call

    let person = {
     firstname: "Nishant",
     lastname: "Padhi"
    }

    let printName = function (country) {
      console.log(this.firstname + " " + this.lastname + " from " + country);
    }

    printName.call(person, "India");

    Output: 
    "Nishant Padhi from India"
 **/

Function.prototype.mycall = function(obj, ...args){ 
    console.log(this);
    let sym = Symbol();                                     
    obj[sym] = this;
    let res = obj[sym](...args)
    delete obj[sym];
    return res;
}