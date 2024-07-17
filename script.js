document.addEventListener('DOMContentLoaded', function() {
    let lives = 5;
    let rock = "./images/rock.jpeg";
    let paper = "./images/willi.jpeg";
    let scissor = "./images/sza.jpg";

    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorBtn = document.getElementById('scissors');

    const scoreReview = document.getElementById("score-review");
    const userScore = document.getElementById('your-score');
    const computerScore = document.getElementById('comp-score');

    const userImage = document.getElementById('user1');
    const opponentImage = document.getElementById('user2');

    const opponentChoices = [rock, paper, scissor];

    function getRandomChoice() {
        const randomIndex = Math.floor(Math.random() * opponentChoices.length);
        return opponentChoices[randomIndex];
    }

    function stone() {
        console.log("Rock button clicked"); // Debug log
        userImage.src = rock;
        const opponentChoice = getRandomChoice();
        console.log("Opponent choice:", opponentChoice); // Debug log
        opponentImage.src = opponentChoice;
    }

    function paperFunction() { // Renamed to avoid conflict
        console.log("Paper button clicked"); // Debug log
        userImage.src = paper;
        const opponentChoice = getRandomChoice();
        console.log("Opponent choice:", opponentChoice); // Debug log
        opponentImage.src = opponentChoice;
    }

    function scissors() {
        console.log("Scissors button clicked"); // Debug log
        userImage.src = scissor;
        const opponentChoice = getRandomChoice();
        console.log("Opponent choice:", opponentChoice); // Debug log
        opponentImage.src = opponentChoice;
    }

    rockBtn.addEventListener('click', stone);
    paperBtn.addEventListener('click', paperFunction); // Ensure to use the renamed function
    scissorBtn.addEventListener('click', scissors);
});
