const tiles = document.querySelectorAll('#container div')
const modal = document.querySelector('#modal')
let diff1 = 50
let diff2 = 50
let player1, player2

let checkHeight = (ind, name) => {
	if (tiles[ind].style.height === '100%'){
		createModal(`
			${name} wins!
		`)
	}
}

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