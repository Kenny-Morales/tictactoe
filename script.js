let gameStorage = ["", "", "", "", "", "", "", "", ""];


function userInput(cardNumber) {
    if (gameStorage.includes("X", cardNumber - 1) == true)
        console.log("error");
    else {
        switch (cardNumber) {
            case 1:
                gameStorage[0] = "X";
                gameMaster();
                console.log(gameStorage);
                break;
            case 2:
                gameStorage[1] = "X";
                gameMaster();
                console.log(gameStorage);
                break;
            case 3:
                gameStorage[2] = "X";
                gameMaster();
                console.log(gameStorage);
                break;
            case 4:
                gameStorage[3] = "X";
                gameMaster();
                console.log(gameStorage);
                break;
            case 5:
                gameStorage[4] = "X";
                gameMaster();
                console.log(gameStorage);
                break;
            case 6:
                gameStorage[5] = "X";
                gameMaster();
                console.log(gameStorage);
                break;
            case 7:
                gameStorage[6] = "X";
                gameMaster();
                console.log(gameStorage);
                break;
            case 8:
                gameStorage[7] = "X";
                gameMaster();
                console.log(gameStorage);
                break;
            case 9:
                gameStorage[8] = "X";
                gameMaster();
                console.log(gameStorage);
                break;
        }
    }
}
function computerInput() {
    for (k = 0; k < gameStorage.length; k++) {
        if (gameStorage[k] == "") {
            gameStorage[k] = "O";
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
        console.log("Player won");
        reset();

    }
    else if ((gameStorage[0] == "O") && (gameStorage[1] == "O") && (gameStorage[2] == "O")) {
        console.log("Computer won");
        reset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[3] == "X") && (gameStorage[4] == "X") && (gameStorage[5] == "X")) {
        console.log("Player won");
        reset();
    }
    else if ((gameStorage[3] == "O") && (gameStorage[4] == "O") && (gameStorage[5] == "O")) {
        console.log("Computer won");
        reset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[6] == "X") && (gameStorage[7] == "X") && (gameStorage[8] == "X")) {
        console.log("Player won");
        reset();
    }
    else if ((gameStorage[6] == "O") && (gameStorage[7] == "O") && (gameStorage[8] == "O")) {
        console.log("Computer won");
        reset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[0] == "X") && (gameStorage[3] == "X") && (gameStorage[6] == "X")) {
        console.log("Player won");
        reset();
    }
    else if ((gameStorage[0] == "O") && (gameStorage[3] == "O") && (gameStorage[6] == "O")) {
        console.log("Computer won");
        reset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[1] == "X") && (gameStorage[4] == "X") && (gameStorage[7] == "X")) {
        console.log("Player won");
        reset();
    }
    else if ((gameStorage[1] == "O") && (gameStorage[4] == "O") && (gameStorage[7] == "O")) {
        console.log("Computer won");
        reset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[2] == "X") && (gameStorage[5] == "X") && (gameStorage[8] == "X")) {
        console.log("Player won");
        reset();
    }
    else if ((gameStorage[2] == "O") && (gameStorage[5] == "O") && (gameStorage[8] == "O")) {
        console.log("Computer won");
        reset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[0] == "X") && (gameStorage[4] == "X") && (gameStorage[8] == "X")) {
        console.log("Player won");
        reset();
    }
    else if ((gameStorage[0] == "O") && (gameStorage[4] == "O") && (gameStorage[8] == "O")) {
        console.log("Computer won");
        reset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else if ((gameStorage[2] == "X") && (gameStorage[4] == "X") && (gameStorage[6] == "X")) {
        console.log("Player won");
        reset();
    }
    else if ((gameStorage[2] == "O") && (gameStorage[4] == "O") && (gameStorage[6] == "O")) {
        console.log("Computer won");
        reset();
        gameStorage = ["", "", "", "", "", "", "", "", ""];
    }

    else {
        console.log("game isn't done");
    }
}

function reset() {
    gameStorage = ["rip"];
}