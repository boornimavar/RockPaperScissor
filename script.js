document.addEventListener('DOMContentLoaded', function() {
    let humanScore = 0;
    let computerScore = 0;
    let turns = 5;

    const userScore = document.getElementById("your-score");
    const computerScoreElem = document.getElementById("comp-score");
    const battleUpdate = document.getElementById("score-review");
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorBtn = document.getElementById('scissors');
    const playerChoice = document.getElementById('user1');
    const computerChoice = document.getElementById('user2');

    const dwane = './images/rock.jpeg';
    const willi = './images/willi.jpeg';
    const sza = './images/sza.jpg';
    const selectionList = [dwane, willi, sza];

    function computerPick() {
        const randomIndex = Math.floor(Math.random() * selectionList.length);
        const selectedChoice = selectionList[randomIndex];
        computerChoice.src = selectedChoice;
        return randomIndex;
    }

    function determineWinner(playerIndex, computerIndex) {
        if (playerIndex === computerIndex) {
            battleUpdate.innerText = "It's a tie";
        } else if (
            (playerIndex === 0 && computerIndex === 2) ||
            (playerIndex === 1 && computerIndex === 0) ||
            (playerIndex === 2 && computerIndex === 1)
        ) {
            battleUpdate.innerText = `${selectionList[playerIndex].split('/').pop().split('.')[0].replace('.jpeg', '')} beats ${selectionList[computerIndex].split('/').pop().split('.')[0].replace('.jpeg', '')}`;
            humanScore++;
            userScore.innerText = `You: ${humanScore}`;
        } else {
            battleUpdate.innerText = `${selectionList[computerIndex].split('/').pop().split('.')[0].replace('.jpeg', '')} beats ${selectionList[playerIndex].split('/').pop().split('.')[0].replace('.jpeg', '')}`;
            computerScore++;
            computerScoreElem.innerText = `Computer: ${computerScore}`;
        }
    }

    function handlePlayerPick(playerIndex, playerImage) {
        if (turns > 0) {
            playerChoice.src = playerImage;
            const computerIndex = computerPick();
            determineWinner(playerIndex, computerIndex);
            turns--;

            if (turns === 0) {
                setTimeout(() => {
                    alert("Game over");
                    const playAgain = confirm("Do you want to play again?");
                    if (playAgain) {
                        resetGame();
                    } else {
                        alert("Thanks for playing!");
                    }
                }, 100);
            }
        }
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        turns = 5;
        userScore.innerText = "You: 0";
        computerScoreElem.innerText = "Computer: 0";
        playerChoice.src = './images/user2.png';
        computerChoice.src = './images/user2.png';
        battleUpdate.innerText = "BATTLEFIELD";
    }

    rockBtn.addEventListener('click', () => handlePlayerPick(0, dwane));
    paperBtn.addEventListener('click', () => handlePlayerPick(1, willi));
    scissorBtn.addEventListener('click', () => handlePlayerPick(2, sza));
});
