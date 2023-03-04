// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
    debugger;
}

function writeCards(cardsArray, eventName ) {
    let blankArray = [];
    for(let i = 0; i < cardsArray.length; i++) {   
    let cardsString = `Thank you, ${cardsArray[i]}, for the wonderful ${eventName} gift!`;
    blankArray.push(cardsString);
    }
    return blankArray;
}

function countDown(number) {
    while(number >= 0) {
        console.log(number)
        number--
    }
}

