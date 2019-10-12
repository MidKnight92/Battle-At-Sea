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
}


const game = {
	userPicks: [],
	hitMiss: [],
	p1: null,
	p2: null,
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
			length: 2,
			letter: 'c',
			gridPlacement: [],
			RemaingFleet: [] 
		},
		{
			typeOfShip: 'Submarine',
			length: 2,
			letter: 's',
			gridPlacement: [],
			RemaingFleet: []	 
		},	
		{
			typeOfShip: 'Battleship',
			length: 2,
			letter: 'b',
			gridPlacement: [], 
			RemaingFleet: []
		},
		{
			typeOfShip:	'Aircraft Carrier',
			length: 2,
			letter: 'a',
			gridPlacement: [],
			RemaingFleet: []
		}
	],
	//the start battle instantiates p1 and p2. It sets p1 to an activePlayer (the player that will start the picking ships) and p2 as an inactivePlayer  
	startBattle(){
		const P1 = new Player ();
		const P2 = new Player ();
		this.p1 = P1;
		this.p2 = P2;
		this.activePlayer = this.p1;
		this.inactivePlayer = this.p2;
	},
	// later--post mvp--error check the pairs to make sure they're in a v or h line and close enough together
	// later--post mvp--error check the pairs to make sure they're in a v or h line and close enough together

	// this takes the users click parses it and saves it into the cords array 
	// grab the values from cords compare them and loop to give it the right letter 
	placeShips(userClicked){ 
		// grabs value sends it to be parsed then saves to userPicks array
		let cords = this.parseCoordinates(userClicked);
		this.userPicks.push(cords);
		
		//looks to see if user picked two different squares before running the function
		if (this.userPicks.length === 2) {

			//if the cols are even change rows
			if (this.userPicks[0][0] === this.userPicks[1][0]) { 
				//this makes the difference between squares an absolute value
				let diff_y = Math.abs(this.userPicks[1][1] - this.userPicks[0][1]);

					// this is incrementing up to the difference of the picks and adds the fleet starting at 0[this.placingShip] specifically the destroyer 
					for (let i = 0; i <= diff_y; i++) {
					this.fleet[this.placingShip];
					//horizontal placement below
					//takes the first user pick and increment up to the second user pick
					for (let i = this.userPicks[0][1]; i <= this.userPicks[1][1]; i++) {
						const col = this.userPicks[0][0] // board[col][row]
						//add a letter representing the the ship in the fleet at the index of placingShip
						this.activePlayer.board[col][i] = this.fleet[this.placingShip]['letter'];
					} 
				} 
				//if the rows are even change columns
			} else if (this.userPicks[0][1] === this.userPicks[1][1]) {
				let diff = Math.abs(this.userPicks[1][1] - this.userPicks[0][1])
				for (let i = 0; i <= diff; i++) {
					
					this.fleet[this.placingShip];
					// vertical placement below
					//takes the first user pick and increment up to the second user pick
					for (let i = this.userPicks[0][0]; i <= this.userPicks[1][0]; i++) {
						const row = this.userPicks[0][1] // board[col][row]
						//add a letter representing the the ship in the fleet at the index of placingShip
						this.activePlayer.board[i][row] = this.fleet[this.placingShip]['letter'];
					}
				}
			}
			// once the 1 ship has been placed (above). check to see if all 5 ships have been placed if not increment up the placing ship and restart the placing process starting at the fleets next index. 
			 //if all ships have been placed for p1 rest the placingShip index back to zero and switch to p2 repeat this process once p2 is done placing ships change the state of the battling to true and this method will stop running because of the setOrBattle method and battling will begin 
			if (this.placingShip === 4) {
				if (this.activePlayer === this.p2 && !this.isBattling) {
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
		return [x , y]; 
	},										
	// notification to display names of ships and lengths and ship placement rules
	// placeFleet(player){
	// 	alert(`${player} place your fleet:\n-The ${this.fleet[0]['typeOfShip']} has a length of ${this.fleet[0]['length']}.\n-The ${this.fleet[1]['typeOfShip']} has a length of ${this.fleet[1]['length']}.\n-The ${this.fleet[2]['typeOfShip']} has a length of ${this.fleet[2]['length']}.\n-The ${this.fleet[3]['typeOfShip']} has a length of ${this.fleet[3]['length']}.\n-The ${this.fleet[4]['typeOfShip']} has a length of ${this.fleet[4]['length']}.\nNote: Ships can be placed horizontally or vertically and they can not touch.`);
	// },
	switchPlayers() {
		if (this.activePlayer === this.p1) {
			this.activePlayer = this.p2;
			this.inactivePlayer = this.p1;
		} else {
			this.activePlayer = this.p1;
			this.inactivePlayer = this.p2;
		}
	},
	//create a function that will change the html to show ships
	showShips(){
		//x= rows; y= columns; This loops through the 2darray and sets the ships
		if (this.isShowing === true) {
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
		const arr1 = clickInfo.square.split('');
		const x = parseInt(arr1[0]);
		const y = parseInt(arr1[2]);
		
		if (this.isBattling === true) {
 		// if (it's p1's turn and they clicked on p2's board) or (if it's p2's turn and they clicked on p1's board)
 			
	 		if ((this.activePlayer === this.p1 && clickInfo.player === 'p2') || (this.activePlayer === this.p2 &&  clickInfo.player === 'p1')) {
	 			//checks inactive player board
	 			if (this.inactivePlayer.board[x][y] == 0){
		 			//if that square does not have a ship it gives it the class of miss and switches player
		 			$(`.grid-item[data-player=${clickInfo.player}][data-square=${clickInfo.square}]`).addClass('miss');
		 			this.switchPlayers();
		 			//if there is a ship add the class as hit and change the lowercase letter to an uppercase letter so it can not be clicked again and registered as a hit
		 			//calls the check for winners method
	 			} else if ((this.inactivePlayer.board[x][y] === 'd') || (this.inactivePlayer.board[x][y] === 'c') || (this.inactivePlayer.board[x][y] === 's') || (this.inactivePlayer.board[x][y] === 'b') || (this.inactivePlayer.board[x][y] === 'a')) {
		 			$(`.grid-item[data-player=${clickInfo.player}][data-square=${clickInfo.square}]`).addClass('hit');
		 			let letter = this.inactivePlayer.board[x][y].toUpperCase();
		 			this.inactivePlayer.board[x].splice(y, 1, letter);
		 			this.checkWinners();
		 			// if this square has already been hit click a different square
		 		} else if ((this.inactivePlayer.board[x][y] === 'D') || (this.inactivePlayer.board[x][y] === 'C') || (this.inactivePlayer.board[x][y] === 'S') || (this.inactivePlayer.board[x][y] === 'B') || (this.inactivePlayer.board[x][y] === 'A')) {
		 			alert(`Pick a different square.`);
		 		}
	 		} else {
	 			//if the active player accidentally clicks on their own board it alerts the user it is the wrong board
	 			alert(`not your turn`);
	 		}
	 		
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
	//assumes there is a winner
		// looks through every element in the inactivePlayer board 
			//if the elements are strings and are uppercased and is not just a single element change activeplayer to false 
	checkWinners(){
		let activePlayerWon = true;
		for (let y = 0; y < this.inactivePlayer.board.length; y++) {
			for (let x = 0; x < this.inactivePlayer.board.length; x++) {
				const singleElement = this.inactivePlayer.board[y][x]
				if (typeof singleElement === "string" && singleElement.toUpperCase() !== singleElement) {
					activePlayerWon = false;
				}
			}
		} 
		// if there were lowercase letter it will say !true === false  which is what we are looking for in the condition we are look for it runs the switch 
		// !false === true ignores condition it declares winner
		if(!activePlayerWon) {
			this.switchPlayers();
		} else {
			$('.battle-grid').off('click', (e) => {
			this.setOrBattle(e.target.dataset);
		});
			$('#p1Header').text('GAME OVER');
			$('#p2Header').text('GAME OVER');
			$('.grid-item').css('backgroundColor','black');
		}
	},
	displayInstructions(){
		alert(`The Goal:\n - Sink your opponnet's fleet before the opponnet sinks your fleet.\n\n How To Play:\n - Players will place fleet to the length of the fleet on their respective battle grid.\n - Once fleets have been placed, each player will take turn firing at their opponnets battle grid by clicking on their opponnet's grid.\n - Players will fire on opponnet's battle grid until they miss.`)
	}
}

	game.startBattle();

// ------------------- Event Listners --------------------- //
$('.startGameButtonStyle').on('click', (e) => {

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
});

$('#instructions').on('click', (e) => {
	game.displayInstructions();
});
