/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

function Game(phrases) {
    this.missed = 0;
    this.phrases = phrases;
    this.activePhrase = null;
}

Game.prototype.startGame = function() {
    $('#overlay').hide();
    this.activePhrase = new Phrase(this.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
}

Game.prototype.getRandomPhrase = function() {
    var index = Math.floor(Math.random() * (this.phrases.length));
    return this.phrases[index];
}

Game.prototype.handleInteraction = function(e) {
    var letter = $(e).text();
    $(e).prop("disabled", true);
    if (this.activePhrase.checkLetter(letter)) {
        this.activePhrase.showMatchedLetter(letter);
        $(e).addClass('chosen');
        this.checkForWin();
    } else {
        $(e).addClass('wrong');
        this.removeLife();
    }
}

Game.prototype.removeLife = function() {
    $("#scoreboard ol li:nth-child("+ (5 - this.missed)+") img").attr('src', 'images/lostHeart.png');
    this.missed++;
    if(this.missed == 5) {
        this.gameOver();
    }
}

Game.prototype.checkForWin = function() {
    var qtdSpaces = $('#phrase ul li.space').length;
    var qtdShow = $('#phrase ul li.show').length;
    if (this.activePhrase.phrase.length == qtdSpaces + qtdShow) {
        this.gameOver();
    }
}

Game.prototype.gameOver = function() {
    var message = this.missed == 5 ? 'You Lose' : 'You Won';
    $('#game-over-message').text(message);
    $('#overlay').show(function (){
        $('.key').prop('disabled', false).removeClass('wrong chosen');
        $('#phrase ul li').remove();
        $.each($("#scoreboard ol li img"), function( index, value ) {
            $(value).attr('src', 'images/liveHeart.png');
        });
    });
}