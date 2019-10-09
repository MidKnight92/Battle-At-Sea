console.log('Welcome to Battle-At-Sea');

class Player {
	constructor(hits, misses) {
		this.hits = hits;
		this.misses = misses;
		this.board =  [
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	];
		this.fleet = [{
		typeOfShip: 'Destroyer',
		length: 2,
		letter: 'd',
		gridPlacement: [],
		RemaingFleet: []	    
	},
	{
		typeOfShip: 'Cruiser', 
		length: 3,
		letter: 'c',
		gridPlacement: [],
		RemaingFleet: [] 
	},
	{
		typeOfShip: 'Submarine',
		length: 3,
		letter: 's',
		gridPlacement: [],
		RemaingFleet: []	 
	},	
	{
		typeOfShip: 'Battleship',
		length: 4,
		letter: 'b',
		gridPlacement: [], 
		RemaingFleet: []
	},
	{
		typeOfShip:	'Aircraft Carrier',
		length: 5,
		letter: 'a',
		gridPlacement: [],
		RemaingFleet: []
	}]
	}

	stillHasShips() {

	}

	placeShip() {

	}
}


const game = {
	whoseTurn: "P1", // can only be "P1" or "P2"
	userPicks: [],
	board: [
		[0,0,0,0,0,0,'d',0,0,0],
		[0,0,0,0,0,0,'d',0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,'c','c','c',0,0],
		[0,'s',0,0,0,0,0,0,0,0],
		[0,'s',0,0,0,0,0,0,0,0],
		[0,'s',0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	],
	pickedGridItems: [],
	fleet: [{
		typeOfShip: 'Destroyer',
		length: 2,
		letter: 'd',
		gridPlacement: [],
		RemaingFleet: []	    
	},
	{
		typeOfShip: 'Cruiser', 
		length: 3,
		letter: 'c',
		gridPlacement: [],
		RemaingFleet: [] 
	},
	{
		typeOfShip: 'Submarine',
		length: 3,
		letter: 's',
		gridPlacement: [],
		RemaingFleet: []	 
	},	
	{
		typeOfShip: 'Battleship',
		length: 4,
		letter: 'b',
		gridPlacement: [], 
		RemaingFleet: []
	},
	{
		typeOfShip:	'Aircraft Carrier',
		length: 5,
		letter: 'a',
		gridPlacement: [],
		RemaingFleet: []
	}],
	startBattle(){
		const P1 = new Player ();
		console.log(P1);
	},
	placeShips(userClicked){ 
		console.log(userClicked);
		console.log(this.userPicks);
		this.userPicks.push(userClicked);
		// let arr = this.userPicks[0].split('');
		// let x = parseInt(arr[0])
		// let y = parseInt(arr[2])
	},												
	// remove alert // notification to display names of ships and lengths and ship placement rules
	// placeFleet(player){
	// 	alert(`${player} place your fleet:\n-The ${this.fleet[0]['typeOfShip']} has a length of ${this.fleet[0]['length']}.\n-The ${this.fleet[1]['typeOfShip']} has a length of ${this.fleet[1]['length']}.\n-The ${this.fleet[2]['typeOfShip']} has a length of ${this.fleet[2]['length']}.\n-The ${this.fleet[3]['typeOfShip']} has a length of ${this.fleet[3]['length']}.\n-The ${this.fleet[4]['typeOfShip']} has a length of ${this.fleet[4]['length']}.\nNote: Ships can be placed horizontally or vertically and they can not touch.`);
	// },
	switchPlayers() {
		if (this.whoseTurn === 'P1') {
			this.whoseTurn = 'P2'
		} else if (this.whoseTurn === 'P2') {
			this.whoseTurn = 'P1'
		}
	},
	// placeDestroyer(count){
	// 	//I want this to to count the number of clicks player 
	// 		//TrackEvent
	// 	for (let y = 0; y < '.grid-item'.length; y++) {
	// 		for (let x = 0; x < '.grid-item'.length; x++){
	// 			if (`.grid-item[dataset-square=${x}-${y}` || (this.board[x - 1][y] === 'd')) {
	// 				console.log('vertical d');
	// 			} else if ((this.board[x][y + 1] === 'd') || (this.board[x][y -1] === 'd')){
	// 				console.log('horizontal d');
	// 			}
	// 		}	
	// 	}
		
	// },
	//create a function that will change the html to show ships
	showShips(){
		//x= rows; y= columns; This loops through the 2darray and sets the ships
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
	// checkDirection(){ //this goes through the 2d array and checks to see if it is first vertical and then horizontal
	// 	// x columns   y is rows 
	// 		// need to to make this check to make sure it meets ships length
	// 	for (let y = 0; y < this.board.length; y++) {
	// 		for (let x = 0; x < this.board.length; x++){
	// 			if (this.board[x][y] === 'd') {
	// 				if ((this.board[x + 1][y] === 'd') || (this.board[x - 1][y] === 'd')) {
	// 					console.log('vertical d');
	// 				} else if ((this.board[x][y + 1] === 'd') || (this.board[x][y -1] === 'd')){
	// 					console.log('horizontal d');
	// 				}
	// 			}
	// 			if (this.board[x][y] === 'c') {
	// 				if ((this.board[x + 1][y] === 'c') || (this.board[x - 1][y] === 'c')) {
	// 					console.log('vertical c');
	// 				} else if ((this.board[x][y + 1] === 'c') || (this.board[x][y - 1] === 'c')){
	// 					console.log('horizontal c');
	// 				}
	// 			}
	// 			if (this.board[x][y] === 's') {
	// 				if ((this.board[x + 1][y] === 's') || (this.board[x - 1][y] === 's')) {
	// 					console.log('vertical s');
	// 				} else if ((this.board[x][y + 1] === 's') || (this.board[x][y - 1] === 's')) {
	// 					console.log('horizontal s');
	// 				}
	// 			}
	// 			if (this.board[x][y] === 'b') {
	// 				if ((this.board[x + 1][y] === 'b') || (this.board[x - 1][y] === 'b')) {
	// 					console.log(' vertical b');
	// 				} else if ((this.board[x][y + 1] === 'b') || (this.board[x][y - 1] === 'b')){
	// 					console.log('horizontal b');
	// 				}
	// 			}
	// 			if (this.board[x][y] === 'a') {
	// 				if ((this.board[x ++][y] === 'a') || (this.board[x --][y] === 'a')) {
	// 					console.log('vertical a');
	// 				} else if ((this.board[x + 1][y] === 'a') || (this.board[x - 1][y] === 'a')){
	// 					console.log('horizontal a');
	// 				}
	// 			}
	// 		}
	// 	}
		
	// },
	// //Changes the button text for Start Game to Restart Game
	// changeStartGameText(){
	// 	$('.startGameButtonStyle').text('Restart Game');
	// 	$('.startGameButtonStyle').attr('id', 'restartBattle');
	// 	$('#restartBattle').removeClass('startGameButtonStyle');
	// 	$('#restartBattle').addClass('restartButtonStyle');
	// },
	// //Changes the button text for Start Game to Restart Game --- W.I.P.
	// changeRestartGameText(){
	// 	$('.restartButtonStyle').text('Start Game');
	// 	$('.restartButtonStyle').attr('id', 'startBattle');
	// 	$('#restartGameButton').addClass('class','startBattleButton');
	// 	$('#restartGameButton').removeClass('restartButtonStyle')
	// 	$('.startBattleButton').removeAttr('#restartGameButton');
	// },
	hitOrMiss(clickInfo){ 
		console.log(clickInfo);
		console.log(clickInfo.player);
		let arr = clickInfo.square.split('');
		let x = parseInt(arr[0])
		let y = parseInt(arr[2])
 		// if (it's p1's turn and they clicked on p2's board) or (if it's p2's turn and they clicked on p1's board)
 		if ((this.whoseTurn === "P1" && clickInfo.player === 'p2') || (this.whoseTurn === "P2" &&  clickInfo.player === 'p1')) {
 			// check stuff

 			// if (this.board[x][y] == 0){
	 		// 	console.log('miss');
	 		// 	$(`.grid-item[data-player=${player}][data-square=${square}]`).addClass('miss');
	 			//console.log(`.grid-item[data-player=${player}][data-square=${square}]`);
	 			this.switchPlayers();
 			// } else if ((this.board[x][y] === 'd') || (this.board[x][y] === 'c') || (this.board[x][y] === 's') || (this.board[x][y] === 'b') || (this.board[x][y] === 'a')) {
	 		// 	$(`.grid-item[data-player=${player}][data-square=${square}]`).addClass('hit');
	 		// 	let letter = this.board[x][y].toUpperCase();
	 		// 	this.board[x].splice(y, 1, letter);
	 		// 	this.switchPlayers();
	 		// } else if ((this.board[x][y] === 'D') || (this.board[x][y] === 'C') || (this.board[x][y] === 'S') || (this.board[x][y] === 'B') || (this.board[x][y] === 'A')) {
	 		// 	alert(`Pick a different square.`);
	 		// }
 		} else {
 			alert(`not your turn`);

 		}

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


// ------------------- Event Listners --------------------- //
$('.startGameButtonStyle').on('click', (e) => {
	// console.log(game.board);
	// game.changeStartGameText();
	game.startBattle();
	game.showShips();

});

$('.restartButtonStyle').on('click', (e) => {
	game.changeRestartGameText();	
});

$('.battle-grid').on('click', (e) => {
	// or sometimes do ship placement
	game.placeShips(e.target.dataset);
	// console.log(e.target.dataset);
	// game. -- place ships
	// game.hitOrMiss(e.target.dataset);
});

$('#instructions').on('click', (e) => {
	game.displayInstructions();
});


//$('.grid-item[data-square=0-0]')
//$('.player1-battle-grid .grid-item[data-square=0-0]')