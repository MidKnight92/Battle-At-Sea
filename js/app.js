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
	vacant: 0,
	board: [],
	pickedGridItems: [],
	p1Fleet: player1['Fleet'],
	p1RemaingFleet: [],
	carrier: [
			  [[0,0,0,0,0,0,0],
			   [0,'c','c','c','c','c',0], 
			   [0,0,0,0,0,0,0]],

			   [[0,0,0],
			   	[0,'c',0],
			   	[0,'c',0],
			   	[0,'c',0],
			   	[0,'c',0],
			   	[0,'c',0],
			    [0,0,0]]
							],
	battleship: [
			    [[0,0,0,0,0,0],
			     [0,'b','b','b','b',0], 
			     [0,0,0,0,0,0]],
  
  			     [[0,0,0],
  			      [0,'b',0],
  			      [0,'b',0],
  			      [0,'b',0],
  			      [0,'b',0],
			      [0,0,0]]
							 ],
	cruiser: [
			    [[0,0,0,0,0],
			     [0,'c','c','c',0], 
			     [0,0,0,0,0]],
  
  			     [[0,0,0],
  			      [0,'c',0],
  			      [0,'c',0],
  			      [0,'c',0],
			      [0,0,0]]
							 ],	
	submarine: [
			    [[0,0,0,0,0],
			     [0,'s','s','s',0], 
			     [0,0,0,0,0]],
  
  			     [[0,0,0],
  			      [0,'s',0],
  			      [0,'s',0],
  			      [0,'s',0],
			      [0,0,0]]
							 ],	
	destroyer: [
			    [[0,0,0,0],
			     [0,'d','d',0], 
			     [0,0,0,0]],
  
  			     [[0,0,0],
  			      [0,'d',0],
  			      [0,'d',0],
			      [0,0,0]]
								],												
	//make2darray creates a 10 by 10 array of arrays all containg 0 values														
	make2Darray(columns, rows){
		let arr = new Array(this['columns']);
		arr.fill(0)
		for (let i = 0; i < arr.length; i++) {
			arr[i] = new Array(this['rows']);
			arr[i].fill(0);
		}
		return arr;
	},
	changeStartGameText(){
		$('.startGameButtonStyle').text('Restart Game');
		$('.startGameButtonStyle').attr('id', 'restartBattle');
		$('#restartBattle').removeClass('startGameButtonStyle');
		$('#restartBattle').addClass('restartButtonStyle');
	},
	changeRestartGameText(){
		$('.restartButtonStyle').text('Start Game');
		$('.restartButtonStyle').attr('id', 'startBattle');
		$('#restartGameButton').addClass('class','startBattleButton');
		$('#restartGameButton').removeClass('restartButtonStyle')
		$('.startBattleButton').removeAttr('#restartGameButton');
	}
}

game.make2Darray()

// ------------------- Event Listners ---------------------
$('.startGameButtonStyle').on('click', (e) => {
	game.make2Darray();
	game.changeStartGameText();

});

$('.restartButtonStyle').on('click', (e) => {
	game.changeRestartGameText()	
});

$('.player1-battle-grid').on('click', (e) => {
	console.log(e.target.dataset);
	console.log(e.target.dataset.whichSquareMoreWords);
});

$('.player2-battle-grid').on('click', (e) => {
	
});