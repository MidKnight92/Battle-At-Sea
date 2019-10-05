console.log('Welcome');

$('.startGameButtonStyle').on('click', (e) => {
	$('.startGameButtonStyle').text('Restart Game');
	$('.startGameButtonStyle').attr('id', 'restartBattle');
	$('#restartBattle').removeClass('startGameButtonStyle');
	$('#restartBattle').addClass('restartButtonStyle');	
});

$('.restartButtonStyle').on('click', (e) => {
	// $('.restartButtonStyle').text('Start Game');
	// $('#restartGameButton').addClass('class','startBattleButton');
	// $('#restartGameButton').removeClass('restartButtonStyle')
	// $('.startBattleButton').removeAttr('#restartGameButton');	
});

$('.player1-battle-grid').on('click', (e) => {
	console.log(e.target.dataset);
	console.log(e.target.dataset.whichSquareMoreWords);
});

$('.player2-battle-grid').on('click', (e) => {
	
});