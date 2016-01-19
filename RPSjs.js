


var computerMove

$('.picsquare').click(function(){
var computerChoice = Math.random();

if (computerChoice <= 0.19) {
	computerMove = "rock";
} else if(computerChoice <= 0.39) {
	computerMove = "paper";
} else if (computerChoice <= 0.59){
	computerMove = "scissors";
	}else if (computerChoice <= 0.79){
		computerMove = "lizard";
	}else {
		computerMove = "spock";
	}
});



$('#rock').click(function(){
var userChoice = "rock"
$('#result-well').removeClass('invisible');

console.log("Computer: " + computerMove);
console.log ("User:" + userChoice);

if (computerMove === "scissors") {
	//alert("Rock destroys scissors. You win!");
	$("#result").html("Rock destroys scissors. You win!");
} else if(computerMove === "paper"){
	//alert("Paper covers rock. Computer wins!");
	$("#result").html("Paper covers rock. Computer wins!");
} else if (computerMove === "lizard"){
	//alert("Rock crushes lizard. You win!");
	$("#result").html("Rock crushes lizard. You win!");
}	else if (computerMove === "spock"){
		//alert("Spock vaporizes rock. Computer wins.");
		$("#result").html("Spock vaporizes rock. Computer wins!");
} else if (computerMove == "rock"){
	//alert("It's a tie!");
	$("#result").html("It's a tie!");
}
});


$('#paper').click(function(){
var userChoice = "paper"
$('#result-well').removeClass('invisible');

console.log("Computer: " + computerMove);
console.log ("User:" + userChoice);

if (computerMove === "scissors") {
	//alert("Paper is cut by scissors. Computer wins!");
	$("#result").html("Paper is cut by scissors. Computer wins!");
} else if(computerMove === "paper"){
	//alert("It's a tie!");
	$("#result").html("It's a tie!");
} else if (computerMove === "lizard"){
	//alert("Paper is eaten by lizard. Computer wins!");
	$("#result").html("Paper is eaten by lizard. Computer wins!");
}	else if (computerMove === "spock"){
		//alert("Paper successfully argues against Spock. You win!");
		$("#result").html("Paper successfully argues against Spock. You win!");
} else if (computerMove == "rock"){
	//alert("Paper covers rock. You win!");
	$("#result").html("Paper covers rock. You win!");
}
});


$('#scissors').click(function(){
var userChoice = "scissors"
$('#result-well').removeClass('invisible');

console.log("Computer: " + computerMove);
console.log ("User:" + userChoice);

if (computerMove === "scissors") {
	//alert("it's a tie!");
	$("#result").html("It's a tie!");
} else if(computerMove === "paper"){
	//alert("Scissors cut paper. You win!");
	$("#result").html("Scissors cut paper. You win!");
} else if (computerMove === "lizard"){
	//alert("Scissors decapitate lizard. You win!");
	$("#result").html("Scissors decapitate lizard. You win!");
}	else if (computerMove === "spock"){
		//alert("Spock warps scissors. Computer wins. ");
		$("#result").html("Spock warps scissors. Computer wins.");
} else if (computerMove == "rock"){
	//alert("Rock beats scissors. Computer wins!");
		$("#result").html("Rock beats scissors. Computer wins.");
}
});



$('#lizard').click(function(){
var userChoice = "lizard"
$('#result-well').removeClass('invisible');

console.log("Computer: " + computerMove);
console.log ("User:" + userChoice);

if (computerMove === "scissors") {
	//alert("Scissors decapitate lizard. Cmputer wins!");
	$("#result").html("Scissors decapitate lizard. Computer wins!");
} else if(computerMove === "paper"){
	//alert("Lizard eats paper. You win!");
	$("#result").html("Lizard eats paper. You win.");
} else if (computerMove === "lizard"){
	//alert("It's a tie!");
	$("#result").html("It's a tie!");
}	else if (computerMove === "spock"){
		//alert("Spock vaporizes lizard. Computer wins. ");
		$("#result").html("Spock vaporizes lizard. Computer wins.");
} else if (computerMove == "rock"){
	//alert("Rock crushes lizard. Computer wins!");
	$("#result").html("Rock crushes lizard. Computer wins!");
}
});


$('#spock').click(function(){
var userChoice = "spock"
$('#result-well').removeClass('invisible');

console.log("Computer: " + computerMove);
console.log ("User:" + userChoice);

if (computerMove === "scissors") {
	//alert("Spock warps scissors. You win!");
	$("#result").html("Spock is cut by scissors. Computer wins!");
} else if(computerMove === "paper"){
	//alert("Paper disproves Spock's theory. You win!");
	$("#result").html("Paper disproves Spock's theory. Computer wins!");
} else if (computerMove === "lizard"){
	//alert("Spock vaporizes lizard. You win!");
	$("#result").html("Spock vaporizes lizard. You win!");
}	else if (computerMove === "spock"){
		//alert("It's a tie!");
		$("#result").html("It's a tie!");
} else if (computerMove == "rock"){
	//alert("Rock vaporizes rock. You win!");
	$("#result").html("Spock vaporizes rock. You win!");
}
});
//

