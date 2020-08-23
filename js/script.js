var isMenuVisible = false
let navbarMenu = document.querySelector('#kku-navbar-menu')

document
	.querySelector('#navbar-menu-button')
	.addEventListener('click', function addActiveMenuClass() {
		isMenuVisible = !isMenuVisible

		if (isMenuVisible) {
			navbarMenu.classList.add('is-active')
		} else {
			navbarMenu.classList.remove('is-active')
		}
	})
