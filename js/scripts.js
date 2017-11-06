
$(document).ready(function() {
	// var player1 = $("input#player1").val();
	// var player2 = $("input#player2").val();

	var playerone =$("#playernumone");
	var playertwo = $("#playernumtwo");





	$("#rollone").click(function() {
		// if (player1!="") {
		// 	alert(player1);
		// }else{
		// 	alert(player1);
		// }
		alert(playerone.val());
		
		
	});

	$("#roll2").click(function() {
		console.log(playertwo.val());

	});

});
