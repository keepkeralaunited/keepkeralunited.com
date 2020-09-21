document.addEventListener('DOMContentLoaded', function () {
	var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))

	if ('IntersectionObserver' in window) {
		console.log('We have Intersection Observer')

		let lazyImageObserver = new IntersectionObserver(function (
			entries,
			observer
		) {
			console.log(entries)
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					let lazyImage = entry.target

					isWebpAvailable().then((result) => {
						if (result) {
							lazyImage.src = lazyImage.dataset.webp
						} else {
							lazyImage.src = lazyImage.dataset.src
						}
					})

					lazyImage.classList.remove('lazy')
					lazyImageObserver.unobserve(lazyImage)

					console.log(lazyImage, 'is loading')
				}
			})
		})

		lazyImages.forEach(function (lazyImage) {
			lazyImageObserver.observe(lazyImage)
		})
	} else {
		// Possibly fall back to event handlers here
	}
})

function isWebpAvailable() {
	return new Promise(function (resolve, reject) {
		let lossyWebp =
			'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'

		var img = new Image()
		img.onload = function () {
			var result = img.width > 0 && img.height > 0
			resolve(result)
		}
		img.onerror = function () {
			reject(false)
		}

		img.src = 'data:image/webp;base64,' + lossyWebp
	})
}
