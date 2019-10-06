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
	Fleet: [{
		typeOfShip: 'Destroyer',
		length: 2,
		gridPlacement: [
			    [[0,0,0,0],
			     [0,'d','d',0], 
			     [0,0,0,0]],
  
  			     [[0,0,0],
  			      [0,'d',0],
  			      [0,'d',0],
			      [0,0,0]]
								], 
	},
	{
		typeOfShip: 'Cruiser', 
		length: 3,
		gridPlacement: [
			    [[0,0,0,0,0],
			     [0,'c','c','c',0], 
			     [0,0,0,0,0]],
  
  			     [[0,0,0],
  			      [0,'c',0],
  			      [0,'c',0],
  			      [0,'c',0],
			      [0,0,0]]
							 ], 
	},
	{
		typeOfShip: 'Submarine',
		length: 3,
		gridPlacement: [
			    [[0,0,0,0,0],
			     [0,'s','s','s',0], 
			     [0,0,0,0,0]],
  
  			     [[0,0,0],
  			      [0,'s',0],
  			      [0,'s',0],
  			      [0,'s',0],
			      [0,0,0]]
							 ],	 
	},	
	{
		typeOfShip: 'Battleship',
		length: 4,
		gridPlacement: [
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
	},
	{
		typeOfShip:	'Aircraft Carrier',
		length: 5,
		gridPlacement: [
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
							]
	}],
	p1RemaingFleet: [],
	p2RemaingFleet: [],												
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
	placeFleet(player){
		alert(`${player} place your fleet:\n-The ${this.Fleet[0]['typeOfShip']} has a length of ${this.Fleet[0]['length']}.\n-The ${this.Fleet[1]['typeOfShip']} has a length of ${this.Fleet[1]['length']}.\n-The ${this.Fleet[2]['typeOfShip']} has a length of ${this.Fleet[2]['length']}.\n-The ${this.Fleet[3]['typeOfShip']} has a length of ${this.Fleet[3]['length']}.\n-The ${this.Fleet[4]['typeOfShip']} has a length of ${this.Fleet[4]['length']}.\nNote: Ships can be placed horizontally or vertically and they can not touch.`);
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
	displayInstructions(){
		alert(`The Goal:\n - Sink your opponnet's fleet before the opponnet sinks your fleet.\n\n How To Play:\n - Players will place fleet on their respective battle grid.\n - Once fleets have been placed, each player will take turn firing at their opponnets battle grid by clicking on their opponnet's grid.\n - Players will fire on opponnet's battle grid until they miss.`)
	}
}

game.make2Darray()

// ------------------- Event Listners --------------------- //
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

$('#instructions').on('click', (e) => {
	game.displayInstructions();
});