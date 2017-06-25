const basicCard = require('./basicCard');
const clozeCard = require('./clozeCard');
const inquirer = require('inquirer');

// Declare Card Check Let
let cardCheck = new clozeCard();

// Takes Input for the question for the new flash card
let backCard = "";
// Takes Input for the answer of the new flash card
let frontCard = "";

inquirer.prompt ([
	{
		message: "What would you like to do?",
		type: "list",
		choices: ["Create", "View"],
		name: "choice"
		
	}
]).then(function (answers) {
	if(answers.choice === "Create") {
		createCard();
	} else {
		cardCheck.show();	
	}
});

function createCard() {
	inquirer.prompt([
		{
			message: "Create the front of the card (the question)",
			type: "input",
			name: "back_card"
		},
		{
			message: "Create the back of the card (the answer)",
			type:"input",
			name: "front_card"
		},
		{
			message: "Create another?",
			type: "confirm",
			name: "confirm"
		}
	]).then(function (answers) {
		backCard = answers.back_card;
		frontCard = answers.front_card;
		cardCheck.create(frontCard, backCard);
		if (answers.confirm) {
			setTimeout(createCard, 1000);
		} else {
			cardCheck.show();
		}
	});
}