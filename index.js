// Code your solutions in this file
// function writeCards(name, event){

//     for (let i = 0; i < writeCards.length; i++){
//         console.log(`Thank you, ${writeCards[i]}, for the wonderful birthday gift!`)
//     }
//     return writeCards;
// }

function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

  function countDown(number) {
    while ( number > 0 ) {
      console.log( number);
      number -= 1;
    }
    console.log( number );
  }

  //you could do
//   function countDown(10) {
//     while ( 10 > 0 ) {
//       console.log( 10); saying print 10 and take -1 each time till you get to 0
//       number -= 1;
//     }
//     console.log( 10 );
//   }