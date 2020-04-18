// Code your solutions in this file


function writeCards(array, string) {
    let cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }
    return cards
}


function countDown(positiveInteger) {
    while (positiveInteger >= 0) {
        console.log(positiveInteger)
        positiveInteger -= 1
    }
}
