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
