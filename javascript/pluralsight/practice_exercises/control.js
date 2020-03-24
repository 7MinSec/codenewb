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