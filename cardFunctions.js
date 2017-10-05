function ClozeCard (clozeText, clozeBack) {
    this.text = clozeText;
    this.back = clozeBack;
    this.fullText = this.text + this.back;
}


//Use a prototype to add a method to the full text that throws
    //an error when the cloze deletion does not appear in the input text




module.exports = ClozeCard;