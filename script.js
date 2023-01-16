let getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice == 0) {
    return rock;
  }
  else if (randomChoice == 1) {
    return paper;
  }

  return scissors;
}

let playRound = (playerChoice, computerChoice) => {
  if(playerChoice == rock) {
    if(computerChoice == paper) {
      return result = 0;
    }
    else if(computerChoice == scissors) {
      return result = 2;
    }
    else {
      return result = 1;
    }
  }

  else if(playerChoice == paper) {
    if(computerChoice == rock) {
      return result = 2;
    }
    else if(computerChoice == scissors) {
      return result = 0;
    }
    else {
      return result = 1;
    }
  }

  else if(playerChoice == scissors) {
    if(computerChoice == paper) {
      return result = 2;
    }
    else if(computerChoice == rock) {
      return result = 0;
    }
    else {
      return result = 1;
    }
  }

  else {
    return result = "Enter a valid choice."
  }
}

let game = () => {    
  let playerScore = 0;
  let computerScore = 0;
  
  for(let i = 0; i < 5; i++) {
    let playerChoice = prompt("Enter your choice : ");
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);

    if(result == 2) {
      console.log("You win!");
      playerScore += 2;
    }
    else if(result == 1) {
      console.log("It's a tie!");
      playerScore += 1;
      computerScore += 1;
    }
    else {
      console.log("You lose!");
      computerScore += 2;
    }
  }

  if(playerScore > computerScore) {
    return winner = "You win the game!";
  }
  else if(playerScore < computerScore) {
    return winner = "Computer wins the game!";
  }
  else {
    return winner = "It's a tie!";
  }
}

const rock = "rock"
    , paper = "paper"
    , scissors = "scissors";

console.log(game());