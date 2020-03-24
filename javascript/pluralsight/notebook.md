# Javascript
This is my live notebook as I'm learning Javascript via the [Pluralsight course](https://app.pluralsight.com/library/courses/learning-programming-javascript/table-of-contents) by [Scott Allen](https://twitter.com/OdeToCode)

## Intro setup/install stuff, first few sample scripts...
Ok so I didn't start taking notes on all this until after most of the intro/prereq stuff was already completed, but you can look at my [practice_exercises](practice_exercises) folder to see some of the basic scripts I created

## Functions

### Comments
You can use ``//`` in front of a line to write comments, like:

`// Brian is awesome!!!`

or

`// var x = 9 // Brian is still really awesome and nobody's seeing this!`

### math.random, math.ceil, math.floor
Check out the [random number generator](practice_exercises/randomNumberGenerator.js) to see what I learned about these functions.

## Definitions
Putting these in can help make code more readable and understandable.  Any time you have duplicated code, you should ask "Could I replace this with a function?"  

## Parameters
See [dieRoll.js](dieRoll.js) for the exercise where I explore parameters.

## Scope
The scope of a variable basically asks "Where is that variable available?"  An example would be this code:

````
var rollMe = function(sizeOTheDie) {
	var result = Math.ceil(sizeOTheDie * Math.random());
	return result;
````
The *result* is not available outside this function because it was declared inside the function.  However, a function can invoke something that's declared outside?  Yes it can.  Again, read through [dieRoll.js](dieRoll.js), but essentially while *sizeOTheDie* and *result* are considered local variables to a function, *dieOne*, *dieTwo*, and *dieThree* are considered global variables - they're not defined inside a function, so they're available anywhere!

## Controls
Check out the [control.js](practice_exercises/control.js) for an example of how to simulate a die roll and then comment based on the result of the roll.  

## Operators
Check out the [control2.js](practice_exercises/control2.js) for an example of providing die roll commentary depending on if multiple values are true (or a mix of true and false).  

### And operator
When dealing with the and operator (`&&`):

* true && true is true
* true && false is false
* false && false is false
* false && true is false


### Or operator
When dealing with the or operator (`||`):

* true || true is true
* true || false is true
* false || true is true
* false || false is false


### Not operator
Check out [this example](practice_exercises/control3.js).  When dealing with the not operator (`!`):

* !true is false
* !false is true



--
* *10/4 - left off at Learning to Program > Branch... > Variations* 