function rollDice (sides) {
    let randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
}

for (let i = 0; i <= 10; i++) {
    console.log(rollDice(6));
}