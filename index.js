// Code your solutions in this file
function writeCards(arr, event){
    let message =[];
    for(let i = 0; i < arr.length; i++){
        message.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}

function countDown(num){
    
        //if num = 5
        // while num > 0
        // print the number 
        // num --
        while(num >= 0){
            console.log(num);
            num --;
        }
}