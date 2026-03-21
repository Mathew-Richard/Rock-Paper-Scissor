function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "Draw!";
    } 
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You Win! 🎉";
    } 
    else {
        result = "You Lose 😢";
    }

    document.getElementById("result").innerText =
        `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
}