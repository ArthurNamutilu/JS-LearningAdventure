// Function to determine the winner of the game
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "Player wins!";
    } else {
      return "Computer wins!";
    }
  }
  
  // Array of choices
  const choices = ["rock", "paper", "scissors"];
  
  // Function to generate computer's choice
  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Testing the game
  const playerChoice = "rock";
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  console.log(`Player choice: ${playerChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(`Result: ${result}`);
  