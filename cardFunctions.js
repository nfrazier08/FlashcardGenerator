function ClozeCard (clozeText, removedPart) {
    this.text = clozeText;
    this.removed = removedPart;
    this.fullText = this.text + this.back;
}

function BasicCard (cardFront, cardBack){
    this.front = cardFront;
    this.back = cardBack
}


module.exports = {
    clozeFunction: ClozeCard,
    basicFunction: BasicCard
}



