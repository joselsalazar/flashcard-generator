var basicCard = require('./basicCard');

var ClozeCard = function(text, cloze) {
	if (this instanceof ClozeCard) {
		this.text = text;
		this.cloze = cloze;
		this.fullText = this.cloze + " " + this.text;
		this.partial = "..." + this.text;
	} else {
		return new ClozeCard(text, cloze);
	}
}

var washingtonCard = ClozeCard("was the first President of the United States", "George Washington");

console.log(washingtonCard.partial);
console.log(washingtonCard.fullText);