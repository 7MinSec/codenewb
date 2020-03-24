// DieRoll.js - 0.1
// by Brian Johnson
//
// In this totally awesome program, you'll get to watch three virtual die get rolled...
// AND not only that but this program will add up the values of the three die and give
// you a grand total!  That's basic math right there, homes!

// First we'll make a variable called rollMe, and inside that will be equal to a
// function called sizeOTheDie, which is made up of the sizeOTheDie value x 6
// and rounded up to the neartest integer.  The result of this calculation is returned:

var rollMe = function(sizeOTheDie) {
	var result = Math.ceil(sizeOTheDie * Math.random());
	return result;
};

// Next, we will console-log the three rolls and add up the roll values.

var resultOfTheRoll = function(){
	console.log()
	console.log("Lets roll some dice, doooodz!");
	console.log();
	console.log("Oooh!  This is exciting!  The result of your first roll is: " + dieOne + ".");
	console.log();
	console.log("The result of your second roll is (drumroll please): " + dieTwo + "!");
	console.log();
	console.log("Ok, for your third and final roll, you rolled a: " + dieThree + "!!!");
	console.log();
	console.log("If you add those values up, you get a grand total of:");
	console.log(parseInt(dieOne) + parseInt(dieTwo) + parseInt(dieThree))
	console.log();
	console.log("Wow - great work!  Please play again sometime.");
	console.log("Kthxbye")
	console.log()
};

// Here we set the variables dieOne, dieTwo and dieThree 
// with a value set to how many "sided" the die is

var dieOne = rollMe(6)
var dieTwo = rollMe(6)
var dieThree = rollMe(6)

// Now we show the output of the resultOfTheRoll function we defined earlier:
resultOfTheRoll();