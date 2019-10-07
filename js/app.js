console.log('Welcome to Battle-At-Sea');

const player1 = {
	hits: 0,
	misses: 0,
	fleet: [{
		typeOfShip: 'Destroyer',
		length: 2,
		gridPlacement: [], 
	},
	{
		typeOfShip: 'Cruiser', 
		length: 3,
		gridPlacement: [], 
	},
	{
		typeOfShip: 'Submarine',
		length: 3,
		gridPlacement: [], 
	},	
	{
		typeOfShip: 'Battleship',
		length: 4,
		gridPlacement: [], 
	},
	{
		typeOfShip:	'Aircraft Carrier',
		length: 5,
		gridPlacement: [] 
	}]
};

const player2 = {
	hits: 0,
	misses: 0,
	fleet: [{
		typeOfShip: 'Destroyer',
		length: 2,
		gridPlacement: [], 
	},
	{
		typeOfShip: 'Cruiser', 
		length: 3,
		gridPlacement: [], 
	},
	{
		typeOfShip: 'Submarine',
		length: 3,
		gridPlacement: [], 
	},	
	{
		typeOfShip: 'Battleship',
		length: 4,
		gridPlacement: [], 
	},
	{
		typeOfShip:	'Aircraft Carrier',
		length: 5,
		gridPlacement: [] 
	}]

};

const game = {
		board: [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,"d",0,0,0,0,'a'],
		[0,0,0,0,"d",0,0,0,0,'a'],
		[0,'s',0,0,0,0,0,0,0,'a'],
		[0,'s',0,0,0,0,0,0,0,'a'],
		[0,'s',0,0,0,0,0,0,0,'a'],
		[0,0,0,"c","c","c",0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,'b','b','b','b',0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	],
	pickedGridItems: [],
	fleet: [{
		typeOfShip: 'Destroyer',
		length: 2,
		letter: 'd',
		gridPlacement: []
			    
	},
	{
		typeOfShip: 'Cruiser', 
		length: 3,
		letter: 'c',
		gridPlacement: [], 
	},
	{
		typeOfShip: 'Submarine',
		length: 3,
		letter: 's',
		gridPlacement: [],	 
	},	
	{
		typeOfShip: 'Battleship',
		length: 4,
		letter: 'b',
		gridPlacement: [], 
	},
	{
		typeOfShip:	'Aircraft Carrier',
		length: 5,
		letter: 'a',
		gridPlacement: []
	}],
	p1RemaingFleet: [],
	p2RemaingFleet: [],												
	// remove alert
	placeFleet(player){
		alert(`${player} place your fleet:\n-The ${this.fleet[0]['typeOfShip']} has a length of ${this.fleet[0]['length']}.\n-The ${this.fleet[1]['typeOfShip']} has a length of ${this.fleet[1]['length']}.\n-The ${this.fleet[2]['typeOfShip']} has a length of ${this.fleet[2]['length']}.\n-The ${this.fleet[3]['typeOfShip']} has a length of ${this.fleet[3]['length']}.\n-The ${this.fleet[4]['typeOfShip']} has a length of ${this.fleet[4]['length']}.\nNote: Ships can be placed horizontally or vertically and they can not touch.`);
	},
	//create a function that will change the html to show ships
	setShips(){
		//x= rows ; y= columns
		for (let y = 0; y < this.board.length; y++) {
			for (let x = 0; x < this.board.length; x++) {
				if (this.board[x][y] === 'd') {
					$(`.grid-item[data-square=${x}-${y}]`).addClass('grid-item-destroyer');
				} else if (this.board[x][y] === 'c') {
					$(`.grid-item[data-square=${x}-${y}]`).addClass('grid-item-cruiser');
				} else if (this.board[x][y] === 's') {
					$(`.grid-item[data-square=${x}-${y}]`).addClass('grid-item-submarine');
				} else if (this.board[x][y] === 'b') {
					$(`.grid-item[data-square=${x}-${y}]`).addClass('grid-item-battleship');
				} else if (this.board[x][y] === 'a') {
					$(`.grid-item[data-square=${x}-${y}]`).addClass('grid-item-airCraft');
				}
			}
		}	
	},
	//Changes the button text for Start Game to Restart Game
	changeStartGameText(){
		$('.startGameButtonStyle').text('Restart Game');
		$('.startGameButtonStyle').attr('id', 'restartBattle');
		$('#restartBattle').removeClass('startGameButtonStyle');
		$('#restartBattle').addClass('restartButtonStyle');
	},
	//Changes the button text for Start Game to Restart Game --- W.I.P.
	changeRestartGameText(){
		$('.restartButtonStyle').text('Start Game');
		$('.restartButtonStyle').attr('id', 'startBattle');
		$('#restartGameButton').addClass('class','startBattleButton');
		$('#restartGameButton').removeClass('restartButtonStyle')
		$('.startBattleButton').removeAttr('#restartGameButton');
	},
	hitTarget(player, target){
		$(target).attr('id','hit');
		player.hits ++;
	},
	missedTarget(player, target){
		$(player).attr('id','miss');
		player.misses ++;
	},
	updateBattleReport(player1, player2){
		$('#p1FleetRemainingStats').text(`Fleet Remaining: ${this.p1RemaingFleet}`);
		$('#p1HitsStats').text(`Hits: ${player1.hits}`);
		$('#p1MissesStats').text(`Misses: ${player1.misses}`);
		$('#p2FleetRemainingStats').text(`Fleet Remaining: ${this.p2RemaingFleet}`);
		$('#p2HitsStats').text(`Hits: ${player2.hits}`);
		$('#p2MissesStats').text(`Misses: ${player2.misses}`);
	},
	//remove alert
	displayInstructions(){
		alert(`The Goal:\n - Sink your opponnet's fleet before the opponnet sinks your fleet.\n\n How To Play:\n - Players will place fleet on their respective battle grid.\n - Once fleets have been placed, each player will take turn firing at their opponnets battle grid by clicking on their opponnet's grid.\n - Players will fire on opponnet's battle grid until they miss.`)
	}
}

// game.make2Darray()

// ------------------- Event Listners --------------------- //
$('.startGameButtonStyle').on('click', (e) => {
	console.log(game.board);
	game.changeStartGameText();

});

$('.restartButtonStyle').on('click', (e) => {
	game.changeRestartGameText()	
});

$('.player1-battle-grid').on('click', (e) => {
	console.log(e.target.dataset);
	// console.log(e.target.dataset.square);
	let target = e.target.dataset.square;
	console.log(target);
	
});

$('.player2-battle-grid').on('click', (e) => {
	console.log(e.target.dataset);
	console.log(e.target.dataset.square);
});

$('#instructions').on('click', (e) => {
	game.displayInstructions();
});

//$('.grid-item[data-square=0-0]')
//$('.player1-battle-grid .grid-item[data-square=0-0]')