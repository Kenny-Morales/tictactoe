let gameStorage = ["", "", "", "", "", "", "", "", ""];


function userInput(cardNumber) {
    console.log(cardNumber)
    console.log(cardNumber-1)
    if ((gameStorage[cardNumber-1] == "X") || (gameStorage[cardNumber-1] == "O"))
        console.log("error");
    else {
        switch (cardNumber) {
            case 1:
                gameStorage[0] = "X";
                break;
            case 2:
                gameStorage[1] = "X";
                break;
            case 3:
                gameStorage[2] = "X";
                break;
            case 4:
                gameStorage[3] = "X";
                break;
            case 5:
                gameStorage[4] = "X";
                break;
            case 6:
                gameStorage[5] = "X";
                break;
            case 7:
                gameStorage[6] = "X";
                break;
            case 8:
                gameStorage[7] = "X";
                break;
            case 9:
                gameStorage[8] = "X";
                break;
        }
        gameMaster();
        console.log(gameStorage);
        updateDisplayTurns(cardNumber, "X");
    }
}
function computerInput() {
    for (k = 0; k < gameStorage.length; k++) {
        if (gameStorage[k] == "") {
            gameStorage[k] = "O";
            updateDisplayTurns(k + 1, "O");
            break;
        }
    }
}
function gameMaster() {
    checkForWinner();
    if (gameStorage.includes("rip") == true)
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    else {
        computerInput();
        checkForWinner();
    }
}

function checkForWinner() {
    if ((gameStorage[0] == "X") && (gameStorage[1] == "X") && (gameStorage[2] == "X")) {
        updateDisplayWinner("You Won!");
        autoReset();

    }
    else if ((gameStorage[0] == "O") && (gameStorage[1] == "O") && (gameStorage[2] == "O")) {
        updateDisplayWinner("You Lost To A Bot...");
        autoReset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[3] == "X") && (gameStorage[4] == "X") && (gameStorage[5] == "X")) {
        updateDisplayWinner("You Won!");
        autoReset();
    }
    else if ((gameStorage[3] == "O") && (gameStorage[4] == "O") && (gameStorage[5] == "O")) {
        updateDisplayWinner("You Lost To A Bot...");
        autoReset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[6] == "X") && (gameStorage[7] == "X") && (gameStorage[8] == "X")) {
        updateDisplayWinner("You Won!");
        autoReset();
    }
    else if ((gameStorage[6] == "O") && (gameStorage[7] == "O") && (gameStorage[8] == "O")) {
        updateDisplayWinner("You Lost To A Bot...");
        autoReset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[0] == "X") && (gameStorage[3] == "X") && (gameStorage[6] == "X")) {
        updateDisplayWinner("You Won!");
        autoReset();
    }
    else if ((gameStorage[0] == "O") && (gameStorage[3] == "O") && (gameStorage[6] == "O")) {
        updateDisplayWinner("You Lost To A Bot...");
        autoReset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[1] == "X") && (gameStorage[4] == "X") && (gameStorage[7] == "X")) {
        updateDisplayWinner("You Won!");
        autoReset();
    }
    else if ((gameStorage[1] == "O") && (gameStorage[4] == "O") && (gameStorage[7] == "O")) {
        updateDisplayWinner("You Lost To A Bot...");
        autoReset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[2] == "X") && (gameStorage[5] == "X") && (gameStorage[8] == "X")) {
        updateDisplayWinner("You Won!");
        autoReset();
    }
    else if ((gameStorage[2] == "O") && (gameStorage[5] == "O") && (gameStorage[8] == "O")) {
        updateDisplayWinner("You Lost To A Bot...");
        autoReset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[0] == "X") && (gameStorage[4] == "X") && (gameStorage[8] == "X")) {
        updateDisplayWinner("You Won!");
        autoReset();
    }
    else if ((gameStorage[0] == "O") && (gameStorage[4] == "O") && (gameStorage[8] == "O")) {
        updateDisplayWinner("You Lost To A Bot...");
        autoReset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[2] == "X") && (gameStorage[4] == "X") && (gameStorage[6] == "X")) {
        updateDisplayWinner("You Won!");
        autoReset();
    }
    else if ((gameStorage[2] == "O") && (gameStorage[4] == "O") && (gameStorage[6] == "O")) {
        updateDisplayWinner("You Lost To A Bot...");
        autoReset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else {
        updateDisplayWinner("TicTacToe");
    }
}

function autoReset() {
    gameStorage = ["rip"];
}

function forceReset() {
    gameStorage = ["", "", "", "", "", "", "", "", ""];
    for (k = 1; k < gameStorage.length + 1; k++) {
        card = document.getElementById(k);
        card.classList.add('playerTranslation');
        card.textContent = '';
    }
    updateDisplayWinner("TicTacToe")
    
}

function updateDisplayTurns(cardNumber, player) {
    card = document.getElementById(cardNumber);
    card.textContent = player;
}
function updateDisplayWinner(winner) {
    card = document.getElementById("winner");
    card.textContent = winner;
}