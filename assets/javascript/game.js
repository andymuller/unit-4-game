$(document).ready(function(){
var wins, losses, targetScore, current, pokeNumber, greatNumber, ultraNumber, masterNumber;

	var resetGame = function(){
        wins = 0;
        losses = 0;
		targetScore = Math.floor(Math.random()*101 + 19);
		current = 0;
		pokeNumber = Math.ceil(Math.random()*12);
		greatNumber = Math.ceil(Math.random()*12);
		ultraNumber = Math.ceil(Math.random()*12);
		masterNumber = Math.ceil(Math.random()*12);
	}
	var winGame = function(){
		wins = wins + 1;
		targetScore = Math.floor(Math.random()*101 + 19);
		current = 0;
		pokeNumber = Math.ceil(Math.random()*12);
		greatNumber = Math.ceil(Math.random()*12);
		ultraNumber = Math.ceil(Math.random()*12);
		masterNumber = Math.ceil(Math.random()*12);
	}
	var loseGame = function(){
		losses = losses + 1;
		targetScore = Math.floor(Math.random()*101 + 19);
		current = 0;
		pokeNumber = Math.ceil(Math.random()*12);
		greatNumber = Math.ceil(Math.random()*12);
		ultraNumber = Math.ceil(Math.random()*12);
		masterNumber = Math.ceil(Math.random()*12);
	}
	resetGame();
 
    $("#target-score").attr("value", targetScore);
    $("#current-score").attr("value", current);
    $("#total-wins").attr("value", wins);
    $("#total-losses").attr("value", losses);
	$("#button-pokeball").attr("value", pokeNumber);
	$("#button-greatball").attr("value", greatNumber);
	$("#button-ultraball").attr("value", ultraNumber);
	$("#button-masterball").attr("value", masterNumber);
	$("#current-score").text(current);
	$("#target-score").text(targetScore);
	$("#total-wins").text(wins);
	$("#total-losses").text(losses);

	$(".ball-button").click(function(){
		current += parseInt($(this).attr("value"));
		console.log(current);
		$("#current-score").text(current);
	

	if(current === targetScore){
		winGame();
		$("#current-score").text(current);
		$("#target-score").text(targetScore);
		$("#total-wins").text(wins);
		$("#total-losses").text(losses);
	}else if(current > targetScore){
		loseGame();
		$("#current-score").text(current);
		$("#target-score").text(targetScore);
		$("#total-wins").text(wins);
		$("#total-losses").text(losses);
		console.log(losses);
	}
});


});