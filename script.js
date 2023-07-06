let gameStorage = ["", "", "", "", "", "", "", "", ""];

function userInput(cardNumber, done) {
    if (done == "game is done")
        reset();
    else {
        switch (cardNumber) {
            case 1:
                gameStorage[0] = "X";
                checkForWinner();
                computerInput();
                console.log(gameStorage);
                break;
            case 2:
                gameStorage[1] = "X";
                checkForWinner();
                computerInput();
                console.log(gameStorage);
                break;
            case 3:
                gameStorage[2] = "X";
                checkForWinner();
                computerInput();
                console.log(gameStorage);
                break;
            case 4:
                gameStorage[3] = "X";
                checkForWinner();
                computerInput();
                console.log(gameStorage);
                break;
            case 5:
                gameStorage[4] = "X";
                checkForWinner();
                computerInput();
                console.log(gameStorage);
                break;
            case 6:
                gameStorage[5] = "X";
                checkForWinner();
                computerInput();
                console.log(gameStorage);
                break;
            case 7:
                gameStorage[6] = "X";
                checkForWinner();
                computerInput();
                console.log(gameStorage);
                break;
            case 8:
                gameStorage[7] = "X";
                checkForWinner();
                computerInput();
                console.log(gameStorage);
                break;
            case 9:
                gameStorage[8] = "X";
                checkForWinner();
                computerInput();
                console.log(gameStorage);
                break;
        }
    }
    
}

function computerInput() {
    for (k = 0; k < gameStorage.length; k++) { 
        if (gameStorage[k] == "") {
            gameStorage[k] = "O";
            checkForWinner();
            break;
        }
    }
}

function checkForWinner() {
    if ((gameStorage[0] == "X") && (gameStorage[1] == "X") && (gameStorage[2] == "X")) {
        console.log("Player won");
    }
    else if((gameStorage[0] == "O") && (gameStorage[1] == "O") && (gameStorage[2] == "O")) {
        console.log("Computer won");
    }
        
    else if ((gameStorage[3] == "X") && (gameStorage[4] == "X") && (gameStorage[5] == "X")) {
        console.log("Player won");
    }
    else if((gameStorage[3] == "O") && (gameStorage[4] == "O") && (gameStorage[5] == "O")) {
        console.log("Computer won");
    }

    else if ((gameStorage[6] == "X") && (gameStorage[7] == "X") && (gameStorage[8] == "X")) {
        console.log("Player won");
    }
    else if((gameStorage[6] == "O") && (gameStorage[7] == "O") && (gameStorage[8] == "O")) {
        console.log("Computer won");
    }
    
    else if ((gameStorage[0] == "X") && (gameStorage[3] == "X") && (gameStorage[6] == "X")) {
        console.log("Player won");
    }
    else if((gameStorage[0] == "O") && (gameStorage[3] == "O") && (gameStorage[6] == "O")) {
        console.log("Computer won");
    }

    else if ((gameStorage[1] == "X") && (gameStorage[4] == "X") && (gameStorage[7] == "X")) {
        console.log("Player won");
    }
    else if((gameStorage[1] == "O") && (gameStorage[4] == "O") && (gameStorage[7] == "O")) {
        console.log("Computer won");
    }

    else if ((gameStorage[2] == "X") && (gameStorage[5] == "X") && (gameStorage[8] == "X")) {
        console.log("Player won");
    }
    else if((gameStorage[2] == "O") && (gameStorage[5] == "O") && (gameStorage[8] == "O")) {
        console.log("Computer won");
    }
    
    else if ((gameStorage[0] == "X") && (gameStorage[4] == "X") && (gameStorage[8] == "X")) {
        console.log("Player won");
    }
    else if((gameStorage[0] == "O") && (gameStorage[4] == "O") && (gameStorage[8] == "O")) {
        console.log("Computer won");
    }
        
    else if ((gameStorage[2] == "X") && (gameStorage[4] == "X") && (gameStorage[6] == "X")) {
        console.log("Player won");
    }
    else if((gameStorage[2] == "O") && (gameStorage[4] == "O") && (gameStorage[6] == "O")) {
        console.log("Computer won");
    }
   
    else {
        console.log("game isn't done");
    }
    

}