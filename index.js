// Code your solutions in this file
function writeCards(array, str){
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(`Thank you, ${array[i]}, for the wonderful ${str} gift!`);
    }
    
    return newArr;
}


function countDown(num){
    let counter = 0;
    while (counter <= num ){
        console.log(num);
        num--;
    }
}