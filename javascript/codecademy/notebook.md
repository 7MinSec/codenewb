# Learn Javascript

These are my notes from the [Learn Javascript](https://www.codecademy.com/learn/learn-javascript) course at Codecademy.

---

# Getting Started with JavaScript

## Introduction to Javascript

### Console
The `console` is a panel that displays important messages - errors and stuff like that.

If you use `console.log()` then anything inside the parenthesis gets printed (logged) to the console.  So this will print 42:

`console.log(42);`

### Comments
You can do comments like this:

```
// This is a comment!
```
You can also do stuff like this:

```
console.log(print-important-thing); // This prints "print-important-thing"
```

Or you can do a multi-line comment thing:

```
/*
This is a really important thing I'm doing.
I'm so good at coding I have digestion problems.
I'm writing this on a plane.
And someone is watching over my shoulder
/*
```

You can even interrupt your own code with a comment!

```
console.log(/*IGNORE ME PLZ K THX BYE*/ 42); // This will still print 42 OMG LOL
```

### Data Types
These can be:

* Numbers (1, 2, 3, 4, 5...and they do NOT need to be encapsulated in quotes.  Even if you do like `10.25` it doesn't need quotes)
* Strings (a group of characters surrounded by single quotes or double quotes)
* Boolean (true or false)
* Null (the absence of a value)
* Undefined (noted with keyword `undefined` and is kind of like *null* but has different use)
* Symbol (unique identifiers.  Won't worry about these for now)
* Objects (the first 6 things in this list are primitive (basic) data types, and objects are more complex)

### Arithmetic Operators
You can do addition, multiplication, subtraction, division with the `+, -, /, *` signs.  The remainder is `%`.

So you can do stuff like:

```
console.log(5+5);
console.log(65/5);
console.log(100-50);
```

### String Concatenation
When '+' is used on two strings, it appends left string to right string.  Like this:

```
console.log('Hello ' + 'World');
```
### Properties
When you introduce a piece of data into JS program, the browser saves it as an instance of the data type.  For example, the property of `length` contains the amount of characters in the string.  You can use the `dot operator` plus the property you want to get its value.  

For example, this will give a result of 2:

```
console.log('Yo'.length); // Prints 2
```

### Methods
Methods are actions you can perform.  You can "call" them by using the `dot operator` plus the name of the method.  Like this:

```
'example string'.methodName()
```
Just don't forget that the method gets a '()' (I think) right after you use it.  Check this example:

```
console.log('                        Remove whitespace                                           '.trim());
```

### Built-in objects
An example is the 'math' object, and they rule cuz' they also have *methods*! So you can do something like this, which will create a random number between 0-1:

```
console.log(Math.random());
```

If you start generating random numbers, and multiplying them and other fun stuff like that, you might end up with weird decimals and stuff.  So you can use a method called `Math.floor()` which rounds *down* to the nearest whole number.

Here's a tricky one:

```
console.log(Math.floor(Math.random() * 200));
```
This uses `Math.floor` to make the output of `Math.random * 200` into a whole number.

---

## Variables
https://www.codecademy.com/paths/web-development/tracks/getting-started-with-javascript/modules/learn-javascript-introduction/lessons/variables/exercises/var

Variables are like this:

```
var myName = 'Brian';
console.log(myName);
// This should print "Brian"
```

The way that `myName` is capitalized is known as `camel casing`.  

Keep in mind that variables:

* Can't start with Numbers
* Are case sensitive
* Should probably not have two with similar capitalization - like `myName` and `MyName`

Once you set a variable, it's easy to print with:

```
console.log(myName);
```

## Create a Variable: let
The `let` keyword means a variable can be reassigned a different value.  Like this:

````
let favFood = 'Beets';
console.log(favFood); // should return nothing
favFood = 'pizza'
console.log(favFood); // should return pizza
favFood = 'tuna'
console.log(favFood); // should return tuna
````

You can also set a variable as nothing initially and then change it over time, like:

```
let favMovie;
console.log(favMovie); // should return nothing
favMovie = 'Childs Play from 1988'
console.log(favMovie) // should return 'Child's Play from 1988'
favMovie = 'Childs Play from 2019'
console.log(favMovie) // should return 'Child's Play from 2019'
```

## Create a Variable: const
`const` is kind of like a `var` but can't be changed.  Check this out:

```
const favMovie = 'Childs Play 3';
console.log(favMovie);
var favMovie2 = "Child's Play 2";
console.log(favMovie2);
const favMovie = "Child's Play 1";
```

If you run this you'll get an error saying the `const` has already been declared.

You need to give `const` a value.  You can't just leave it empty like you can with `let`.

## Mathematical Assignment Operators



LEFT OFF HERE ON EXERCISE 5:
https://www.codecademy.com/paths/web-development/tracks/getting-started-with-javascript/modules/learn-javascript-introduction/lessons/variables/exercises/mathematical-shortcuts
