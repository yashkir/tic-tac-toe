"use strict";

class TicTacToe {
    static winningLines = [
        [0, 1, 2], // horizontal (3)
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // vertical (3)
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // diagonal (2)
        [2, 4, 6],
    ];

    constructor (selector) {
        this.squares = [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ];

        this.activePlayer = -1;
        this.games = [];

        this.boardEl = document.querySelector(`${selector} .board`);
        this.squareEls = document.querySelectorAll(`${selector} .board > .square`);
        this.resetGameBtn = document.querySelector(`${selector} .reset-game-btn`);
        
        this.boardEl.addEventListener("click", this.boardClickHandler.bind(this));
        this.resetGameBtn.addEventListener("click", this.resetGame.bind(this));
    }

    renderSquare(n) {
        console.log(n);
        this.squareEls[n].innerHTML = this.squares[n];
    }

    boardClickHandler(event) {
        console.log(event);
        let n = event.target.id[event.target.id.length - 1] - 1;

        this.squares[n] = this.activePlayer;
        this.renderSquare(n);
    }

    resetGame() {

    }
}

let app = new TicTacToe("#game");
