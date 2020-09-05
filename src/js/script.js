let isMenuVisible = false
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

let giftBoxs = [
	{
		targetId: 'essentials-pack-tags',
		spanId: 'essentials-question-circle',
	},
	{
		targetId: 'for-babies-pack-tags',
		spanId: 'for-babies-question-circle',
	},
	{
		targetId: 'premium-pack-tags',
		spanId: 'premium-question-circle',
	},
]

let productLists = [
	{
		targetId: 'local-taste-product-list',
		spanId: 'local-taste-caret',
	},
	{
		targetId: 'local-art-product-list',
		spanId: 'local-art-caret',
	},
	{
		targetId: 'local-lifestyle-product-list',
		spanId: 'local-lifestyle-caret',
	},
	{
		targetId: 'local-skincare-product-list',
		spanId: 'local-skincare-caret',
	},
	{
		targetId: 'local-drinks-product-list',
		spanId: 'local-drinks-caret',
	},
	{
		targetId: 'local-baby-items-product-list',
		spanId: 'local-baby-items-caret',
	},
]

function makeClickToggle(items, action) {
	items.map(function (item) {
		document
			.getElementById(item.spanId)
			.addEventListener('click', function () {
				action(item.targetId)
			})
	})
}

makeClickToggle(giftBoxs, toggleTags)
makeClickToggle(productLists, toggleProductList)

function toggleProductList(productListId) {
	toggleElement(productListId, 'initial')
}

function toggleTags(packageName) {
	toggleElement(packageName, 'flex')
}

function toggleElement(elementId, display) {
	let element = document.getElementById(elementId)
	toggleDisplay(element, display)
}

function toggleDisplay(element, display) {
	if (element.style.display) {
		element.style.display = null
	} else {
		element.style.display = display
	}
}
