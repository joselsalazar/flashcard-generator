var basicCard = require('./basicCard');
var fs = require('fs');
let newCard = "";

var ClozeCard = function() {
	this.create = function (front, back) {
		newCard = basicCard(front, back);
		var logTxt = 
			"=====================" +
			"\nBack of Card: " + newCard.back +
			"\nFront of Card: " + newCard.front +
			"\n=====================\n";
		fs.appendFile("log.txt", logTxt, 'utf8', function(err){
			if(err) throw err;
			console.log("\nCard Added!\n");
		});
	}
	this.show = function () {
		fs.readFile("log.txt", "utf8", function(error, data) {
			if (data == null) {
				console.log("There are no cards yet!");
			} else {
				console.log(data);
			}
		});
	}
	this.partial = function () {
		console.log("..." + newCard.front);
	}
}

module.exports = ClozeCard;