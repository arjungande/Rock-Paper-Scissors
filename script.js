let userScore = 0;
let compScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const compChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (userChoice === compChoice) {
    result = `It's a draw! 🤝 You both chose ${userChoice}.`;
  } else if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    userScore++;
    result = `You Win! 🎉 ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    result = `You Lose! 😢 ${compChoice} beats ${userChoice}`;
  }

  document.getElementById('result').innerText = result;
  document.getElementById('score').innerText = `You: ${userScore} | Computer: ${compScore}`;
}
