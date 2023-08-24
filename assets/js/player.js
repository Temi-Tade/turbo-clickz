createModal(`
	<form>
		<input type='text' id='player1Name' placeholder='Player1 Name...' maxlength='8' required>
		<input type='text' id='player2Name' placeholder='Player2 Name...' maxlength='8' required>
		<input type='submit' value='play!' id='playBtn'>
`)

modal.querySelector('form').addEventListener('submit', () => {
	event.preventDefault()
	let names = modal.querySelectorAll('input[type=text]')
	let name_card = document.querySelectorAll("#container small")
	
	if (names[0].value.trim() === names[1].value.trim()) {
		alert('Players cannot have the same name')
		return
	}else{
		player1 = names[0].value.trim()
		player2 = names[1].value.trim()
		modal.parentElement.style.display = 'none'
	}
	names.forEach((val, ind) => {
		name_card[ind].innerHTML = val.value.toUpperCase()
	})
})

//turbo clickz
//rules
//orientation
//sounds
//coords
//font
//start page info