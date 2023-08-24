const tiles = document.querySelectorAll('#container div')
const modal = document.querySelector('#modal')
let diff1 = 50
let diff2 = 50

tiles.forEach((val, ind) => {
	val.style.height = '50%'
	val.onclick = () => {
		switch (ind) {
			case 0:
				diff1 += 5;
				diff2 -= 5;
				tiles[0].style.height = `${diff1}%`
				tiles[1].style.height = `${diff2}%`
				break;
				
			case 1:
				diff1 -= 5;
				diff2 += 5;
				tiles[0].style.height = `${diff1}%`
				tiles[1].style.height = `${diff2}%`
				break;
		}
	}
})

