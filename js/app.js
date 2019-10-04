console.log('Linked');


$('.grid-container').on('click', (e) => {
	console.log(e.target.dataset);
	console.log(e.target.dataset.whichSquareMoreWords);
})