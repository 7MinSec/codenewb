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