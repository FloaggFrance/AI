let buttonMenu = document.getElementById('button-menu')
let menu = document.getElementById('menu-header-nav')

buttonMenu.addEventListener('click', function (e) {
	e.preventDefault()

	if(menu.style.display == "none") {
		menu.style.display = "block"
		buttonMenu.classList.add('open')
	} else {
		menu.style.display = "none"
		buttonMenu.classList.remove('open')
	}
})