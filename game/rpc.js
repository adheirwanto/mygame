function play() {
	const choices = ['rock', 'paper', 'scissors'];
	const player = document.getElementById('player');
	const computer = document.getElementById('pc');
	const hasil = document.getElementById('hasil');
	const rock = document.getElementById('rock');
	const paper = document.getElementById('paper');
	const scissors = document.getElementById('scissors');

	rock.onclick = function() {
			const computer_choice = choices[Math.floor(Math.random() * choices.length)];
			player.innerText = 'rock';
			computer.innerText = computer_choice;
			updateResult('rock', computer_choice);
	};

	scissors.onclick = function() {
			const computer_choice = choices[Math.floor(Math.random() * choices.length)];
			player.innerText = 'scissors';
			computer.innerText = computer_choice;
			updateResult('scissors', computer_choice);
	};

	paper.onclick = function() {
			const computer_choice = choices[Math.floor(Math.random() * choices.length)];
			player.innerText = 'paper';
			computer.innerText = computer_choice;
			updateResult('paper', computer_choice);
	};

	function updateResult(playerChoice, computerChoice) {
			if (playerChoice === computerChoice) {
					hasil.innerText = 'Tie!';
			} else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
								(playerChoice === 'scissors' && computerChoice === 'paper') ||
								(playerChoice === 'paper' && computerChoice === 'rock')) {
					hasil.innerText = 'You Win!';
			} else {
					hasil.innerText = 'You Lose!';
			}
	}
}
