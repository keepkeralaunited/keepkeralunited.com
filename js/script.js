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

function toggleProductList(productListId) {
	let element = document.getElementById(productListId)
	if (element.style.display) {
		element.style.display = null
	} else {
		element.style.display = 'initial'
	}
}
