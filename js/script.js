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
	toggleElement(productListId, 'initial')
}

function toggleTags(packageName) {
	console.log('Calling This')
	toggleElement(packageName, 'flex')
}

function toggleElement(elementId, display) {
	let element = document.getElementById(elementId)
	toggleDisplay(element, display)
}

function toggleDisplay(element, display) {
	console.log(element)
	console.log(element.style.display)

	if (element.style.display) {
		element.style.display = null
	} else {
		console.log('We are here')
		element.style.display = display
	}
}
