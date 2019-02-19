/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

$(document).ready(function() {
    var game;

    $('#btn__reset').on('click', function() {
        game = new Game(['test your phrase', 'even now i am working', 'what is going on ricky']);
        game.startGame();
    });

    $('.key').on('click', function() {
        game.handleInteraction(this);
    });
});

