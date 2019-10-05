console.log('Welcome');


$('.player1-battle-grid').on('click', (e) => {
	console.log(e.target.dataset);
	console.log(e.target.dataset.whichSquareMoreWords);
});

$('.player2-battle-grid').on('click', (e) => {
	
});