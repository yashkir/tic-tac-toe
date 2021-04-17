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

    static symbols = {
        '-1' : 'X',
        '1': 'O',
        '0': '',
    }

    constructor (selector) {
        this.squares = [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0,
        ];

        this.turn = 0;
        this.lastTurn = 8;
        this.games = [];

        this.activePlayer = -1;

        this.boardEl = document.querySelector(`${selector} .board`);
        this.squareEls = document.querySelectorAll(`${selector} .board > .square`);
        this.statusEl = document.querySelector(`${selector} .status`);
        this.resetGameBtn = document.querySelector(`${selector} .reset-game-btn`);
        
        this.boardEl.addEventListener("click", this.boardClickHandler.bind(this));
        this.resetGameBtn.addEventListener("click", this.resetGame.bind(this));
    }

    renderSquare(n) {
        this.squareEls[n].innerHTML = this.constructor.symbols[this.squares[n]];
    }

    renderWinner(winner) {
        let text = "";

        if (winner === 0) {
            text = "It's a tie!";
        } else {
            text = `Winner: ${this.constructor.symbols[winner]}`;
        }

        this.statusEl.textContent = text;
    }

    boardClickHandler(event) {
        let n = event.target.id[event.target.id.length - 1] - 1;

        if (this.squares[n] === 0) {
            this.squares[n] = this.activePlayer;

            this.renderSquare(n);

            // TODO move the logic out of the click handler
            let winner = this.getWinner();
            if (winner !== null) {
                this.renderWinner(winner); 
            }

            this.activePlayer *= -1;
            this.turn++;
        }
    }

    /* return winning player index, or 0 for a tie, null otherwise */
    getWinner() {
        for (const line of this.constructor.winningLines) {
            let lookingAt = 0;
            let count = 1;

            for (const index of line) {
                if (this.squares[index] === lookingAt) {
                    count++;
                } else {
                    lookingAt = this.squares[index];
                    count = 1;
                }
            }

            if (lookingAt != 0 && count === 3) {
                return lookingAt;
            }
        }

        if (this.turn === this.lastTurn) {
            return 0;
        } else {
            return null;
        }
    }

    resetGame() {

    }
}

let app = new TicTacToe("#game");
