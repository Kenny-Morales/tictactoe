let gameStorage = ["", "", "", "", "", "", "", "", ""];

function userInput(cardNumber) {
    switch (cardNumber) {
        case 1:
            gameStorage[0] = "X";
            computerInput();
            winner();
            console.log(gameStorage);
            break;
        case 2:
            gameStorage[1] = "X";
            computerInput();
            winner();
            console.log(gameStorage);
            break;
        case 3:
            gameStorage[2] = "X";
            computerInput();
            winner();
            console.log(gameStorage);
            break;
        case 4:
            gameStorage[3] = "X";
            computerInput();
            winner();
            console.log(gameStorage);
            break;
        case 5:
            gameStorage[4] = "X";
            computerInput();
            winner();
            console.log(gameStorage);
            break;
        case 6:
            gameStorage[5] = "X";
            computerInput();
            winner();
            console.log(gameStorage);
            break;
        case 7:
            gameStorage[6] = "X";
            computerInput();
            winner();
            console.log(gameStorage);
            break;
        case 8:
            gameStorage[7] = "X";
            computerInput();
            winner();
            console.log(gameStorage);
            break;
        case 9:
            gameStorage[8] = "X";
            computerInput();
            winner();
            console.log(gameStorage);
            break;
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

function winner() {
    if ((gameStorage[0] && gameStorage[3] && gameStorage[6]) == "X") {
        console.log("Player won");
    }
}