// Code your solutions in this file
function writeCards(names,event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}

writeCards(["Ada","Brendan","Ali"], "birthday")


function countDown(integer) {
    while (integer>0) {
        console.log(integer);
        integer -= 1;
    }
    console.log(integer);
}