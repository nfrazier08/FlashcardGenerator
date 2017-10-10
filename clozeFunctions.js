function ClozeCard (clozeText, removedPart) {
    this.text = clozeText;
    this.removed = removedPart;
    this.clozedStructure = this.text.replace(this.removed, "______");
}

module.exports = ClozeCard;