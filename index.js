// Code your solutions in this file

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);

// const cards = ["Ada", "Brendan", "Ali"];

function writeCards(cards, event){
  const array = [];
    for (let i = 0; i < cards.length; i++){
        // console.log(`Thank you, ${cards[i]} for the wonderful ${event} gift!`)
        array.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return array;
}

function countDown(num){
    while (num > 0) {
        console.log(num);
        num--;
    }
    console.log(num);
    // return num;
}