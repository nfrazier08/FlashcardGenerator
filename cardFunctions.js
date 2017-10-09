function ClozeCard (clozeText, removedPart) {
    this.text = clozeText;
    this.removed = removedPart;
    this.clozedStructure = this.text.replace(this.removed, "______");
}

function BasicCard (cardFront, cardBack){
    this.front = cardFront;
    this.back = cardBack
}


module.exports = {
    clozeFunction: ClozeCard,
    basicFunction: BasicCard
}



