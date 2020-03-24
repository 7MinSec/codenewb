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