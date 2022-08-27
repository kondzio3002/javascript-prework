{
const playGame = function(playerInput){
    clearMessages();

    // Functions
    const getMoveName = function(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        }
    
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    const displayResult = function(argComputerMove, argPlayerMove){
        if((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
            return 'Ty wygrywasz!';
        } else if((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')){
            return 'Niestety, przegrywasz :(';
        } else if(argComputerMove == argPlayerMove){
            return 'Jest remis';
        } 
            return 'Wystąpił błąd - nieznany ruch';
    }

    // Computer Move
    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    // Player Move
    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    // Check result game
    printMessage(displayResult(computerMove, playerMove));
}

const playRockClicked = function(){
    playGame(1);
} 
const playRock = document.getElementById('play-rock'); 
playRock.addEventListener('click', playRockClicked);


const playPaperClicked = function(){
    playGame(2);
} 
const playPaper = document.getElementById('play-paper'); 
playPaper.addEventListener('click', playPaperClicked);


const playScissorsClicked = function(){
    playGame(3);
} 
const playScissors = document.getElementById('play-scissors'); 
playScissors.addEventListener('click', playScissorsClicked);
}