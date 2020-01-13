function playGame() {
	var begBet = Number(document.forms["luckySevens"]["begBet"].value);
	if (begBet <= 0) {
		alert("Starting bet must be greater than 0.");
		document.forms["luckySevens"]["begBet"].value = "";
		document.forms["luckySevens"]["begBet"].focus();
		return true;
		resetForm();
	}
	var winArray = [begBet];
	var rollCounter = 0;
	for (var gameMoney = begBet; gameMoney >= 1; rollCounter++) {
		diceOne = Math.floor(Math.random() * 6) +1;
		diceTwo = Math.floor(Math.random() * 6) +1;
		if (Number(diceOne + diceTwo) == 7) {
			gameMoney += 4;
			winArray[winArray.length] = gameMoney;
		} else {
			gameMoney -= 1;
			winArray[winArray.length] = gameMoney;
		}
	}
	var maxWin = 0;
	for (var indexCounter = 0; indexCounter < winArray.length; indexCounter++) {
		if (winArray[indexCounter] > maxWin) {
			maxWin = winArray[indexCounter];
		}
	}

	function clearErrors(){
		for (var loopCounter=0;
			loopCounter<document.forms["luckySevens"].elements.length;
			loopCounter++){
				if(document.forms["luckySevens"].elements[loopCounter]
				.parentElement.className.indexOf("has-")!=-1){

					document.forms["luckySevens"].elements[loopCounter]
					.parentElement.className="form-group";
				}
			}
	}

	function resetForm(){
		clearErrors();
		document.forms["luckySevens"]["startingBet"].value="";

		document.getElementById("results").style.display="none";
		document.getElementById("submitButton").innerText="Submit";
		document.forms["numberFun"]["startBet"].focus();
	}


	document.getElementById("results").style.display = "block";
	document.getElementById("startBet").innerText = ("$" + begBet.toFixed(2));
	document.getElementById("totalRolls").innerText = rollCounter;
	document.getElementById("highAmount").innerText = ("$" + maxWin.toFixed(2));
	document.getElementById("highRollCount").innerText = winArray.indexOf(maxWin);
	document.getElementById("submitButton").innerText = "Play Again";
	

	return false;
}
