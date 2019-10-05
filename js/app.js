console.log('Welcome to Battle-At-Sea');

const player1 = {
	hits: 0,
	misses: 0,
	Fleet: [{
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
	Fleet: [{
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
	columns: 10,
	rows: 10,
	board: [],
	pickedGridItems: [],
	p1Fleet: player1['Fleet'],
	p1RemaingFleet: [],
	make2Darray(columns, rows){
		let arr = new Array(this['columns']);
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(this['rows']);
		}
		return arr;
	},

	startGame(){

	}

}


// ------------------- Event Listners ---------------------
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