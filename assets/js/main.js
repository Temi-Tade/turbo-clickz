const tiles = document.querySelectorAll('#container div');
const modal = document.querySelector('#modal');
let player1, player2;

const createModal = (content) => {
	modal.animate({
		transform: ['scale(0)', 'scale(1.05)', 'scale(1)'],
	},
	{
		duration: 500,
	})
	modal.parentElement.style.display = 'block';
	modal.innerHTML = content;
}

let requestPlayerNames = () => {
	createModal(`
			<form autocomplete='off' spellcheck='false'>
				<h3><i class='fas fa-user-friends'></i>Player Names</h3>
				<input type='text' id='player1Name' placeholder='Player1 Name...' maxlength='8' required>
				<input type='text' id='player2Name' placeholder='Player2 Name...' maxlength='8' required>
				<button type='submit' id='playBtn'><i class='fas fa-play'></i></button>
			</form>
		`);
		
	modal.querySelector('form').addEventListener('submit', () => {
		event.preventDefault();
		let names = modal.querySelectorAll('input[type=text]');
		let name_card = document.querySelectorAll("#container small");
		
		if (names[0].value.trim().toUpperCase() === names[1].value.trim().toUpperCase()) {
			alert('Players cannot have the same name');
			return;
		}else if (names[0].value.trim().length === 0 || names[1].value.trim().length === 0){
			alert('Player Names cannot be empty');
			return;
		}
		else{
			player1 = names[0].value.trim();
			player2 = names[1].value.trim();
			modal.parentElement.style.display = 'none';
		}
		names.forEach((val, ind) => {
			name_card[ind].innerHTML = val.value.toUpperCase();
		})
		startGame();
	})
}

let checkHeight = (ind, name) => {
	if (tiles[ind].style.height === '100%'){
		createModal(`
		<h3 class='fas fa-trophy'></h3>
			<p style='padding: 1rem'>${name} wins!</p>
			<button class='fas fa-redo' id='replay'></button>
		`);
	}
	
	document.querySelector("#replay").onclick = () => {
		requestPlayerNames();
	}
}
const startGame = () => {
	let diff1 = 50;
	let diff2 = 50;
	tiles.forEach((val, ind) => {
		val.style.height = '50%'
		val.onclick = () => {
			switch (ind) {
				case 0:
					diff1 += 5;
					diff2 -= 5;
					tiles[0].style.height = `${diff1}%`
					tiles[1].style.height = `${diff2}%`
					checkHeight(0, player1)
					break;
						
				case 1:
					diff1 -= 5;
					diff2 += 5;
					tiles[0].style.height = `${diff1}%`
					tiles[1].style.height = `${diff2}%`
					checkHeight(1, player2)
					break;
			}
		}
	})
}

requestPlayerNames()

document.querySelector("#settingsBtn button").onclick = () => {
	createModal(`
		<h3>How to Play</h3>
		<p>Both players tap on their portions of the screen represented by the colours, ensure you tap as fast as you can in order to increase the height of your portion and win</p>
		<p>P.S.: Remember the trick is to tap the screen, not to hit it, while you do this, ensure you are not hitting the screen so hard that you end up breaking it. The developer is in no way responsible for this.</p>
		<button class='fas fa-check' onclick='modal.parentElement.style.display= "none"'></button>
	`)
}
