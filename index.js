function countDown(p) {
    while ( p > 0 ) { 
        console.log(p);
        p -= 1;
    }
    console.log(p) 
}

function writeCards(names, event) {
    var new_array = [];
    for (let count = 0; count < names.length; count++) { 
        new_array.push(`Thank you, ${names[count]}, for the wonderful ${event} gift!`);
    }
    return new_array;
}