# Javascript practice exercises

Die roll simulation
--------
```
// In this exercise we're simulating a die roll, and then adding some comments
// depending on how sucky or not sucky the roll is.

var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
};


var roll = getDieRoll(6);

if(roll >= 5){
console.log("Great roll!");
}

if(roll == 6){
console.log("You rolled a 6!  Time to pick up sticks!");
}

if(roll <=4){
console.log("Meh, that was not a great roll sucka!");
}

if (roll == 2){
console.log("Uh oh! Snake eyes!  You die!");
}

if (roll == 1){
console.log("You rolled a one, but we're still havin' fun!");
}

console.log("You rolled a " + roll);
```

Die roll - part 2
--------
This time with more commentary on how good or not good the roll is:

```
// In this exercise we're simulating a die roll, and then adding some comments
// depending on how sucky or not sucky the roll is.

var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
};

var roll = getDieRoll(6);

if (roll == 6){
console.log("Pick up sticks, cuz' you rolled a 6!!!!")
}

if (roll <=3 && roll >=1) {
console.log("You rolled between a 1 and a 3!");
}

if (roll == 4 || roll == 5) {
console.log("You rolled a 4 or a 5");
}

console.log("You rolled a " + roll);
```

Die roll - part 3
--------
This time with even MORE ways of commenting on what makes a sucky or not-sucky roll:

```
// In this exercise we're simulating a die roll, and then adding some comments
// depending on how sucky or not sucky the roll is.

var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;
};

var roll = getDieRoll(6);

if (!(roll == 1 || roll == 2 || roll == 3 || roll == 4)) {
console.log("You didn't roll a 1, 2, 3 or 4.  So you got that going for you.");
}


console.log("You rolled a " + roll);
```

Functions
--------
In this exercises we set a bunch of *var*s and assemble a really long and really annoying greeting:

```
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
```

Functions - part 2
-------
In this exercise we revisit the die-rolling bit whilest using functions:

```
/* 
var DieOne = 6;
var DieTwo = 4;
var DieThree = 1;

console.log(DieOne);
console.log(DieTwo);
console.log(DieThree);

// In the example above, we're simply setting three variables and echoing them.
// Doesn't make for a very interesting simulated die roll, does it?  
// Lets try this:

var DieOne = 6;
var DieTwo = 4;
var DieThree = 1;

var value = 6 * Math.random();
var roll = Math.ceil(value);
console.log(roll);

// Math.ceil ALWAYS rounds UP to nearest integer, so
// 5.8 would round up to 6, and 5.0234 would round up to 6 too
//
// You could use Math.round, and that rounds to nearest integer
// So 5.6 goes to 6, 5.2 goes to 5.
// 
// You could also use Math.floor which rounds down to nearest integer
// 5.9 would round to 5 


var DieOne = 6;
var DieTwo = 4;
var DieThree = 1;

console.log(Math.ceil(6 * Math.random()));

// In the above value we've taken 6 x math.random, then
// taken THAT value and pass it into math.ceil,
// and then taken THAT value and passed it to console.log

*/

var DieOne = Math.ceil(6 * Math.random());
var DieTwo = Math.ceil(6 * Math.random());
var DieThree = Math.ceil(6 * Math.random());

console.log(DieOne);
console.log(DieTwo);
console.log(DieThree);
console.log(DieOne + DieTwo + DieThree);
```

Functions - part 3
--------
More die-rolling fun with functions and stuff!

```
var rollMe = function(sizeOTheDie) {
	var result = Math.ceil(sizeOTheDie * Math.random());
	return result;
};

var resultOfTheRoll = function(){
	console.log(dieOne)
	console.log(dieTwo)
	console.log(dieThree)
	console.log(dieOne + dieTwo + dieThree)
};

var dieOne = rollMe(6)
var dieTwo = rollMe(6)
var dieThree = rollMe(6)

resultOfTheRoll();
/*

var dieOne = rollMe();
var dieTwo = rollMe();
var dieThree = rollMe();

console.log(dieOne);
console.log(dieTwo);
console.log(dieThree);
console.log(dieOne + dieTwo + dieThree);

*/
```

Random number generator
--------
An exercise to generate some random numbers!  W00t!

```
// Awesome random number generator, v0000000.1

console.log();

console.log("This will generate a number between 0-1:");
console.log(Math.random());
console.log();

console.log("This will generate 6x a number between 0-1:");
console.log(6 * Math.random());
console.log();

console.log("This will take a number from 0-1 and round it up to nearest number.  This is dumb, I know, but I DON'T CARE I'M LEARNING HOW THIS STUFF WORKS BACK OFF!!!!!!");
console.log(Math.ceil(Math.random()));
console.log();

console.log("This will take a number from 0-1 and round it DOWN to the nearest number.  You're probably saying 'No doi, it's gonna be zero every time!' but again I AM NEW TO THIS SO STOP HOUNDING ME!!!!");
console.log(Math.floor(Math.random()));
console.log();
```

Types
--------
This exercise shows how to utilize types:

```
// Variables have a data type - a classification of a value.
// We might call "2" a number or string but what does javascript think it is?

var a = 5, b = 10, c = 'fart', d = '666', e='69';

console.log(a);
console.log(typeof a);

// The output will show that "333" is a NUMBER.  

console.log(typeof c);

// Output will say that "fart" is a STRING

var result = b > a;

console.log(result);

// This will show as "true" because b is larger than a.

console.log(typeof result);

// Result will be "boolean"

a = 'Hello';

console.log(a);
console.log(typeof a);

// Because we reassigned a to be "Hello" it is now a string,
// even though earlier in the script a was equal to a number

var combine = b + e;
console.log(combine);
console.log(typeof combine);

// Result will be "1069."  The reason is that b is a number and
// e is a string.  Thus, javascript assumes you're building a string:
// '10' + '69' = '69

var combine2 = b * e;
console.log(combine2)
console.log(typeof combine);

// The result is "69" because we're telling javascript to 
// multiply 2 numbers.  Javascript basically says "I'm gonna convert
// '69' into a number since you're doing multiplication."

var combine3 = b * parseInt(e);
console.log(combine3)
console.log(typeof combine3);

// By using "parseInt(e)" we're telling javascript
// "Hey, treat this as a number, not a string. Kthxbye."
```

Variables
--------
In this exercise we get introduced to variables:

```
var x;
// This is like going out and renting a storage locker with nothing in it

console.log(x);

// If you run this program, variable will be undefined, so the program is essentially saying 
// "you've put nothing in the variable!"
// Keep in mind "Not defined" is an error.  It means syntax is wrong.  Node is basically saying
// "You're trying to use x, I dunno what that is. So I'm stopping."
// "Not defined" is DIFFERENT than undefined. 
```

Variables - part 2
--------
More tinkering with variables!

```
//This shows some simple variable-setting and using those variables
//in simple math

var x = 3, y = 2;

console.log(x);

console.log(y);

console.log(x+y);
```

