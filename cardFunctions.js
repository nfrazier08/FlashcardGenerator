function ClozeCard (clozeText, clozeBack) {
    this.text = clozeText;
    this.back = clozeBack;
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



