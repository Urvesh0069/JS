function rollDice() {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice').innerHTML = diceResult;
}