// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);

const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";

function writeCards(x, y) {
    let array = [];
    for (let i = 0; i < x.length; i++) {
        array.push(`Thank you, ${x[i]}, for the wonderful ${y} gift!`);

    }
    return array
}

writeCards(names, event);

function countDown(num) {
    while ( num  > 0) {
        console.log( num );
        --num
    }
    console.log( num );
}