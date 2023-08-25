const UA = navigator.userAgent.toLowerCase()

const throwError = () => {
	createModal(`
			<h3 class='fas fa-info'></h3>
				<p>Your device is not compatible with this game. Please launch it on a smartphone</p>
				<p>If you are using a smartphone and the game is not working, kindly contact the developer <a href='mailto: codinglabz20@gmail.com'>here</a></p>
			`)
}

const checkDevice = () => {
	if (UA.match('android') || UA.match('ipad') || UA.match('ipod') || UA.match('blackberry') || UA.match('webos') || UA.match('windows phone') || UA.match('iphone')){
		return
	}else{
		throwError()
	}
}

checkDevice()