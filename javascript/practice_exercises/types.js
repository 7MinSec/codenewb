// Variables have a data type - a classificaiton of a value.
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