var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
	this.print = function () {
		console.log("Front of Card: " + this.front + "\n"
			+ "Back of Card: " + this.back);
	}
}

module.exports = BasicCard;