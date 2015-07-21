var Board = function () {
    this.empty = 0;
    this.X = 1;
    this.O = 2;
    this.wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    this.gamestate = [0, 0, 0, 0, 0, 0, 0, 0, 0];
};

Board.prototype = {
    copy: function () {
        var newBoard = new Board();
        newBoard.gamestate = this.gamestate.slice();
        return newBoard;
    },
    move: function (player, pos) {
        this.gamestate[pos] = player;
    },
    getMoves: function () {
        var moves = [];
        for (var i = 0; i < 9; i++) {
            if (this.gamestate[i] == this.empty) {
                moves.push(i);
            }
        }
        return moves;
    },
    isFull: function () {
        return this.gamestate.indexOf(this.empty) === -1;
    },
    getWinner: function () {
        for (var i = 0; i < this.wins.length; i++) {
            var a, b, c;
            a = this.gamestate[this.wins[i][0]];
            b = this.gamestate[this.wins[i][1]];
            c = this.gamestate[this.wins[i][2]];

            if (a == b && a == c && a != this.empty) {
                return a;
            }
        }
        return this.empty;
    }
};