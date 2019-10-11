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
			placed: false,
			RemaingFleet: []	    
		},
		{
			typeOfShip: 'Cruiser', 
			length: 3,
			letter: 'c',
			placed: false,
			RemaingFleet: [] 
		},
		{
			typeOfShip: 'Submarine',
			length: 3,
			letter: 's',
			placed: false,
			RemaingFleet: []	 
		},	
		{
			typeOfShip: 'Battleship',
			length: 4,
			letter: 'b',
			placed: false,
			RemaingFleet: []
		},
		{
			typeOfShip:	'Aircraft Carrier',
			length: 5,
			letter: 'a',
			placed: false,
			RemaingFleet: []
		}]
	}

	stillHasShips() {

	}

	placeShip() {

	}
}


const game = {
	userPicks: [],
	hitMiss: [],
	p1: null,
	p2: null,
	whoseTurn: 'P1',
	activePlayer: null,
	inactivePlayer: null,
	isBattling: false,
	isShipsShowing: false,
	placingShip: 0,
	winner:false,
	board: [
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
	],
	pickedGridItems: [],
	fleet: [
		{
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
		}
	],
	startBattle(){
		const P1 = new Player ();
		const P2 = new Player ();
		this.p1 = P1;
		this.p2 = P2;
		this.whoseTurn = "P1"
		this.activePlayer = this.p1;
		this.inactivePlayer = this.p2;
	},
	// later--post mvp--error check the pairs to make sure they're in a v or h line and close enough together
	//.     0 is row (x) --- 1 is column (y)
	// this takes the users click parses it and saves it into the cords array 
	// grab the values from cords compare them and loop to give it the right letter
	// later--post mvp--error check the pairs to make sure they're in a v or h line and close enough together
	placeShips(userClicked){ 
		
		// grabs value sends it to be parsed then saves to userPicks array
		let cords = this.parseCoordinates(userClicked);
		this.userPicks.push(cords);
		console.log(cords);

		if (this.userPicks.length === 2) {
			console.log("userPicks is now equal to 2");

			//if the cols are even change y
			if (this.userPicks[0][0] === this.userPicks[1][0]) { console.log("horiz");
				//this makes the difference an absolute value
				console.log(this.userPicks);
				let diff_y = Math.abs(this.userPicks[1][1] - this.userPicks[0][1])
				console.log(diff_y);

				// check if the diff in cols matches the length of destroyer
				// if (this.fleet[0]['length'] === diff_y) {
					// loop up to that dist

				for (let i = 0; i <= diff_y; i++) {
					this.fleet[this.placingShip];
					// should figure out which ship to place
					//horizontal placement below
					for (let i = this.userPicks[0][1]; i <= this.userPicks[1][1]; i++) {
						const col = this.userPicks[0][0]
						this.activePlayer.board[col][i] = this.fleet[this.placingShip]['letter'];
						
					} 
				} 
			} else if (this.userPicks[0][1] === this.userPicks[1][1]) {
				let diff = Math.abs(this.userPicks[1][1] - this.userPicks[0][1])
				for (let i = 0; i <= diff; i++) {
					console.log('vertical');
					this.fleet[this.placingShip];
					// vertical placement below
					for (let i = this.userPicks[0][0]; i <= this.userPicks[1][0]; i++) {
						const row = this.userPicks[0][1] // board[col][row]
						this.activePlayer.board[i][row] = this.fleet[this.placingShip]['letter'];
						
					}
				}
			}
				// if 5 -- reset to 0
				// 'done'
				// later: change player
			if (this.placingShip === 4) {
				console.log("that was the last ship");
				if (this.activePlayer === this.p2 && !this.isBattling) {
					console.log("that was p2's last ship, now battling");
					this.isBattling = true;
				}
				this.placingShip = 0;
				this.switchPlayers()
			} else {
				// cross ship off the list
				this.placingShip++;
			}	
			// clear out this.userPicks
			this.userPicks = [];
		}
	},

	parseCoordinates(square){
		const arr1 = square.square.split('');
		const x = parseInt(arr1[0]);
		const y = parseInt(arr1[2]);
		// console.log(` this is x ${x}`);
		// console.log(`this is y ${y}`);
		return [x , y]; 
	},										
	// remove alert // notification to display names of ships and lengths and ship placement rules
	// placeFleet(player){
	// 	alert(`${player} place your fleet:\n-The ${this.fleet[0]['typeOfShip']} has a length of ${this.fleet[0]['length']}.\n-The ${this.fleet[1]['typeOfShip']} has a length of ${this.fleet[1]['length']}.\n-The ${this.fleet[2]['typeOfShip']} has a length of ${this.fleet[2]['length']}.\n-The ${this.fleet[3]['typeOfShip']} has a length of ${this.fleet[3]['length']}.\n-The ${this.fleet[4]['typeOfShip']} has a length of ${this.fleet[4]['length']}.\nNote: Ships can be placed horizontally or vertically and they can not touch.`);
	// },
	switchPlayers() {
		console.log("switching players");
		if (this.activePlayer === this.p1) {
			console.log('you switched to p2');
			this.activePlayer = this.p2;
			this.inactivePlayer = this.p1;
		} else {
			this.activePlayer = this.p1;
			this.inactivePlayer = this.p2;
			console.log('you switched to p1');
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
		if (this.isShowing === true) {


		}
		for (let y = 0; y < this.activePlayer.board.length; y++) {
			for (let x = 0; x < this.activePlayer.board.length; x++) {
				if (this.activePlayer.board[x][y] === 'd') {
					$(`.grid-item[data-square=${x}-${y}]`).addClass('grid-item-destroyer');
				} else if (this.activePlayer.board[x][y] === 'c') {
					$(`.grid-item[data-square=${x}-${y}]`).addClass('grid-item-cruiser');
				} else if (this.activePlayer.board[x][y] === 's') {
					$(`.grid-item[data-square=${x}-${y}]`).addClass('grid-item-submarine');
				} else if (this.activePlayer.board[x][y] === 'b') {
					$(`.grid-item[data-square=${x}-${y}]`).addClass('grid-item-battleship');
				} else if (this.activePlayer.board[x][y] === 'a') {
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
	hitOrMiss(clickInfo){ 
		// let cords = this.parseCoordinates(clickInfo);
		// this.hitMiss.push(cords);
		console.log("about to check hit or miss");
		const arr1 = clickInfo.square.split('');
		const x = parseInt(arr1[0]);
		const y = parseInt(arr1[2]);
		console.log('set for battle');

		if (this.isBattling === true) {
 		// if (it's p1's turn and they clicked on p2's board) or (if it's p2's turn and they clicked on p1's board)
 			console.log("this is clickInfo.player");
 			console.log(clickInfo.player);
	 		if ((this.activePlayer === this.p1 && clickInfo.player === 'p2') || (this.activePlayer === this.p2 &&  clickInfo.player === 'p1')) {
	 			//check stuff
	 			if (this.inactivePlayer.board[x][y] == 0){
		 			console.log('miss');
		 			$(`.grid-item[data-player=${clickInfo.player}][data-square=${clickInfo.square}]`).addClass('miss');
		 			console.log(`.grid-item[data-player=${clickInfo.player}][data-square=${clickInfo.square}]`);
		 			this.switchPlayers();
	 			} else if ((this.inactivePlayer.board[x][y] === 'd') || (this.inactivePlayer.board[x][y] === 'c') || (this.inactivePlayer.board[x][y] === 's') || (this.inactivePlayer.board[x][y] === 'b') || (this.inactivePlayer.board[x][y] === 'a')) {
		 			$(`.grid-item[data-player=${clickInfo.player}][data-square=${clickInfo.square}]`).addClass('hit');
		 			let letter = this.inactivePlayer.board[x][y].toUpperCase();
		 			this.inactivePlayer.board[x].splice(y, 1, letter);
		 			this.checkWinners();
		 			//this.switchPlayers();
		 		} else if ((this.inactivePlayer.board[x][y] === 'D') || (this.inactivePlayer.board[x][y] === 'C') || (this.inactivePlayer.board[x][y] === 'S') || (this.inactivePlayer.board[x][y] === 'B') || (this.inactivePlayer.board[x][y] === 'A')) {
		 			alert(`Pick a different square.`);
		 		}
	 		} else {
	 			alert(`not your turn`);
	 		}
	 		console.log("about to Check Winners");
	 	}  
	},
	setOrBattle(eventL){
		if (this.isBattling !== true) {
			this.placeShips(eventL);
		} else {
			this.hitOrMiss(eventL);
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
	checkWinners(){
		console.log("checking winners");
		let activePlayerWon = true;
		for (let y = 0; y < this.inactivePlayer.board.length; y++) {
			for (let x = 0; x < this.inactivePlayer.board.length; x++) {
				const singleElement = this.inactivePlayer.board[y][x]
				if (typeof singleElement === "string" && singleElement.toUpperCase() !== singleElement) {
					activePlayerWon = false;
					console.log('checked for upppers');
				}
			}
		} 
		if(!activePlayerWon) {
			console.log("about to switch players - nope -");
			this.switchPlayers();
		} else {
			console.log('you won');
			$('.battle-grid').off('click', (e) => {
			this.setOrBattle(e.target.dataset);
			console.log('congrats');
		});
		}
	},





	//remove alert
	displayInstructions(){
		alert(`The Goal:\n - Sink your opponnet's fleet before the opponnet sinks your fleet.\n\n How To Play:\n - Players will place fleet to the length of the fleet on their respective battle grid.\n - Once fleets have been placed, each player will take turn firing at their opponnets battle grid by clicking on their opponnet's grid.\n - Players will fire on opponnet's battle grid until they miss.`)
	}
}

	game.startBattle();

// ------------------- Event Listners --------------------- //
$('.startGameButtonStyle').on('click', (e) => {
	// console.log(game.board);
	// game.changeStartGameText();
	game.showShips();
});

$('.restartButtonStyle').on('click', (e) => {
	game.changeRestartGameText();	
});

$('.battle-grid').on('click', (e) => {
	// or sometimes do ship placement
	// game.parseCoordinates(e.target.dataset);
	game.setOrBattle(e.target.dataset);
	// console.log(e.target.dataset);
});

$('#instructions').on('click', (e) => {
	game.displayInstructions();
});


//$('.grid-item[data-square=0-0]')
//$('.player1-battle-grid .grid-item[data-square=0-0]')