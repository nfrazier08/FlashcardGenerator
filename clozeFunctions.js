function ClozeCard (fullText, removedPart) {
    this.full = fullText;
    this.removed = removedPart;
    this.clozedStructure = this.text.replace(this.removed, "______");
}

module.exports = ClozeCard;