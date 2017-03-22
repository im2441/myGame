// app.js, a js file for writing all the view updates and running the game

var renderturn = function(){
	$("#turn").text("Player: "+ game.turn);
};

var renderWin = function(){
	$("#turn").text("Winner: " + game.winner);
};

var play = function(c){
	var index = c.id;
	var row = index.charAt(0);
	var col = index.charAt(2);
	game.updateCell(row, col);
	if(index == "0-0")
		$("#0-0").text(game.turn);
	if(index == "0-1")
		$("#0-1").text(game.turn);
	if(index == "0-2")
		$("#0-2").text(game.turn);
	if(index == "1-0")
		$("#1-0").text(game.turn);
	if(index == "1-1")
		$("#1-1").text(game.turn);
	if(index == "1-2")
		$("#1-2").text(game.turn);
	if(index == "2-0")
		$("#2-0").text(game.turn);
	if(index == "2-1")
		$("#2-1").text(game.turn);
	if(index == "2-2")
		$("#2-2").text(game.turn);
	$("c").off("click");
	game.checkWin();
	console.log(game.turn);
	if(game.over)
		renderWin();
	else{
		game.changeTurn();
		renderturn();
	}
};

var setClicks = function(){
	$(".cell").click(function(){
		play(this);
})
};

var reset = function(){
	game.reset();
	renderturn();
	setClicks();
};

$(document).ready(function(){
	game.buildBoard();
	setClicks();
	$('.reset').click(function(){
		reset();
	})
})


