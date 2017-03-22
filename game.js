// game.js, a js file for all the game logic
console.log('game working');

var Cell = function(row, col) {
	this.index = row + "-" + col;
	this.value = " ";
};
/*var firstCell = new Cell(1,1);
console.log(firstCell);*/

var game = {
	turn: "x",
	over: false,
	winner: null,
	board: [],
	buildBoard: function(){
		for(var i=0; i<3; i++) {
			this.board.push([]);
			for(var j=0; j<3; j++){
				var c = new Cell(i,j);
				this.board[i].push(c);
			}
		}
	},
	count: 0,

	changeTurn: function(){
		if(this.count % 2 == 0){
			this.turn = "o"; //for x
		} else {
			this.turn = "x"; //for o
		}
		console.log(this.count);
		this.count++;
	},

	checkWin: function(){
		var winningCombinations = [['0-0','0-1','0-2'], ['0-0','1-1','2-2'], ['0-0','1-0','2-0'], ['0-1','1-1','2-1'], ['0-2','1-2','2-2'], ['0-2','1-1','2-0'], ['1-0','1-1','1-2'], ['2-0','2-1','2-2']];
		for(var i=0; i<8; i++){
			var xs = 0;
			var os = 0;
			for(var j=0; j<3; j++){
				var row = winningCombinations[i][j].charAt(0);
				var col = winningCombinations[i][j].charAt(2);
				var cel = this.board[row][col];
				if(cel.value == "x")
					xs++;
				else if(cel.value == "o")
					os++;
				if(xs == 3){
					this.over = true;
					this.winner = "x";
					break;
				}
				if(os == 3){
					this.over = true;
					this.winner = "o";
					break;
				}
			}
		}
	},

	updateCell: function(row, col){
		if(this.board[row][col].value == " ")
			this.board[row][col].value = this.turn;
	},

	reset: function(){
		this.board = [];
		this.buildBoard();
		this.turn = "x";
		this.count = 1;
		this.winner = null;
		this.over = false;
		$("#0-0").text("");
		$("#0-1").text("");
		$("#0-2").text("");
		$("#1-0").text("");
		$("#1-1").text("");
		$("#1-2").text("");
		$("#2-0").text("");
		$("#2-1").text("");
		$("#2-2").text("");
	}

}