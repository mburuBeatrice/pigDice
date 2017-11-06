$(document).ready(function() {


	//here we will do some clean up on the playernumone input field
	//here we will do some clean up on the playernumone input field
	$("#playernumone").click(function() {
		$(this).val("");
		$("#warningone").text("");
		$("#p-one").text("...");

	});

	$("#playernumtwo").click(function() {
		$(this).val("");
		$("#warningtwo").text("");
		$("#p-two").text("...");
	});


	//here we will do some clean up on the playernumone input field
	//here we will do some clean up on the playernumone input field

	//*****************//

	// obtaining player one name
	function getplayerone(){
		return document.getElementById("playernumone").value;
	}
	// end fxn->obtaining player one name
	// end fxn->obtaining player one name

		//***********************//
	//obtaining player two name
	function getplayertwo(){
		return document.getElementById("playernumtwo").value;
	}

	//end of this function->obtaining player two name


	//this is just setting player one name on the homescreen
	function setplayerone(playerone){
		document.getElementById("p-one").innerHTML=playerone;
	}


	//this is just setting player two on the homescreen

	function setplayertwo(playertwo){
		document.getElementById("p-two").innerHTML=playertwo;
	}



	$("#rollone").click(function() {
		$("#warningone").text("");
		if (getplayerone()==="") {
			$("#warningone").text("player one name is required");
			document.getElementById("playernumone").focus();
		}else{
			$("#p-one").text(getplayerone());
			//begins logic for rolling dice player one

			$("#p1score").text(generateNUm());
		
		}	
	});


	//try rolling on btn two
	$("#roll2").click(function() {
		$("#warningtwo").text("");
		if (getplayertwo()==="") {
			$("#warningtwo").text("player two name is required");
			document.getElementById("playernumtwo").focus();
		}else{
			$("#p-two").text(getplayertwo());
			//begin logiv for rolling dic for player two

			$("#p2score").text(generateNUm());
		
		}
	});


	//button add for player two
	$("#addplayertwo").click(function() {
		if (getplayerone()==="") {
			$("#warningone").text("Enter Username");
		}else{
			setplayertwo(getplayertwo());
		}		
		setplayertwo(getplayertwo())
	});


	//btn add for playerone
	$("#addplayerone").click(function() {
		if (getplayerone()==="") {
			$("#warningone").text("Enter Username");
		}else{
			setplayerone(getplayerone());
		}
		
		
	});




	//functions for the game
	//1.generate
	function generateNUm(){
		return Math.floor((Math.random() * 6) + 1);
	}

	//2.constructore function

	function Player(score ,totalscore){
		this.score=score;
		this.totalscore=score;

	}



	//3.function for Computation

	function check(args){
		args=parseInt(args);
		if (args!=(1||6)) {
			return args;
		}else{
			return 0;
		}
	}
	//4:adding score
	


console.log(check(generateNUm()));
	
	






});

