console.log(typeof console.log);

// The result will be "function," a new type.
// Functions are powerful because they contain code that we can call from inside the program.

var Greeting = function() {
console.log("Hello!")
console.log("Hello!")
console.log("Hello!")
console.log("Hello!")
}

Greeting(); 

// Basically what we've done is make a function
// called Greeting with several instances of "Hello"
// that get written when Greeting is called with Greeting()

var Greeting2 = function() {
var sayhi = "Hiya!"
console.log(sayhi)
console.log(sayhi)
console.log(sayhi)
console.log(sayhi)
console.log(sayhi)
}

Greeting2(); 

// In this case we're showing that Greeting2 can create
// its own variables inside of it named Hiya, which we can
// later call with Greeting2()

var Greeting3 = function(name) {
var message = "OMG hi " + name;
console.log(message);
}

Greeting3("Brian");
Greeting3("Johnson");

// This example shows that we can set a variable called 
// Greeting3 with a function called "name" inside of it.
// We invoke Greeting3 twice, passing a different paramater with each run.