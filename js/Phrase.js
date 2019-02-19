/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

function Phrase(phrase) {
    this.phrase = phrase.toLowerCase();
}

Phrase.prototype.addPhraseToDisplay = function() {
    var ul = $('#phrase ul');
    for (let index = 0; index < this.phrase.length; index++) {
        var letter = this.phrase[index];
        var element = $(document.createElement('li'));
        element.text(letter);
        element.addClass(letter === " " ? 'space': 'hide letter ' + letter);
        ul.append(element);
    }
}

Phrase.prototype.checkLetter = function(letter) {
    return this.phrase.includes(letter);
}

Phrase.prototype.showMatchedLetter = function(letter) {
    $('.hide.letter.' + letter).addClass('show').removeClass('hide');
}