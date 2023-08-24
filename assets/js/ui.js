const createModal = (content) => {
	modal.animate({
		transform: ['scale(0)', 'scale(1.05)', 'scale(1)']
	},
	{
		duration: 500
	})
	modal.parentElement.style.display = 'block'
	modal.innerHTML = content
}