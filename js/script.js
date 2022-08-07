function playGame(playerInput){
    clearMessages();

    // Functions
    function getMoveName(argMoveId){
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

    function displayResult(argComputerMove, argPlayerMove){
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            return 'Ty wygrywasz!';
        } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            return 'Niestety, przegrywasz :(';
        } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            return 'Ty wygrywasz!';
        } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            return 'Niestety, przegrywasz :(';
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            return 'Ty wygrywasz!';
        } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            return 'Niestety, przegrywasz :(';
        } else if(argComputerMove == argPlayerMove){
            return 'Jest remis';
        } 

            return 'Wystąpił błąd - nieznany ruch'
    }

    // Computer Move
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    // Player Move

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    // Check result game
    printMessage(displayResult(computerMove, playerMove));
}

function playRockClicked(){
    playGame(1);
} 
let playRock = document.getElementById('play-rock'); 
playRock.addEventListener('click', playRockClicked);


function playPaperClicked(){
    playGame(2);
} 
let playPaper = document.getElementById('play-paper'); 
playPaper.addEventListener('click', playPaperClicked);


function playScissorsClicked(){
    playGame(3);
} 
let playScissors = document.getElementById('play-scissors'); 
playScissors.addEventListener('click', playScissorsClicked);
  