// Code your solutions in this file

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        array[i] = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
    }
    return array
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}