function ImageController() {
	var imageService = new ImageService()
	//Your ImageService is a global constructor function what can you do here if you new it up?

	imageService.getImage(function(image){
		console.log(image)
		drawImage(image)
	})

	function drawImage(image){
		document.body.style.backgroundImage = `url(${image.url})`
	}
}


