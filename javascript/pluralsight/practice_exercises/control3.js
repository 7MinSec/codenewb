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