var playerName = '';

var board = new Board();
var minimax = new MiniMax();

var tileID = ["zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight"
];

function otherName() {
    playerName = $('#userInput').val();
}

function fillTile(eventData) {
    var tileObject = $('#' + tileID[eventData.data]);
    var tile = tileObject.text();
    if (tile === 'X' || tile === 'O') {
        return;
    }
    tileObject.text('X');
    board.move(board.X, eventData.data);

    if (board.getWinner() === board.X) {
        alert("Congratulations " + playerName + ", you won!");
        return;
    }
    if (board.isFull()) {
        alert(playerName + ", it's a draw!");
        return;
    }
    var move = minimax.buildTree(board, board.O);
    $('#' + tileID[move]).text("O");
    board.move(board.O, move);

    if (board.getWinner() === board.O) {
        alert("Sorry, " + playerName + " you lost!");
        return;
    }
    if (board.isFull()) {
        alert(playerName + ", it's a draw!");
        return;
    }
}

$(function () {
    for (var i = 0; i < 9; i++) {
        $('#' + tileID[i]).click(i, fillTile);
    }
    $('#userSubmit').click(otherName);
});
