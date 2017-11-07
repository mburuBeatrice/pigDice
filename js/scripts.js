$(document).ready(function() {


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

	function getplayerone(){
		return document.getElementById("playernumone").value;
	}

	function getplayertwo(){
		return document.getElementById("playernumtwo").value;
	}

	function setplayerone(playerone){
		document.getElementById("p-one").innerHTML=playerone;
	}



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

	function generateNUm(){
		return Math.floor((Math.random() * 6) + 1);
	}

	function Player(name){
		this.name = name;
		this.turnscore=0;
		this.totalscore=0;


	}


	Player.prototype.roll = function(){

	    var	rollvalue =generateNUm();
	    if(rollvalue===0){
	    	this.totalscore=0;
	    }else{
	    	this.totalscore+=rollvalue;
	    }

	    return rollvalue;


	};

	Player.prototype.hold = function(){
	 	this.totalscore+=this.turnscore;
	 	this.turnscore=0;
	};

	var gamerplayerone = new Player("karis");
	console.log(gamerplayerone.roll());
					function sum(){

					}

	var game = {
		initialscore:0,
		newscore:function(val){
			return this.initialscore+val;
		},
		incre:function(foo){
			return this.newscore+=foo;
		}


	}
});
