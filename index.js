// Code your solutions in this file
function writeCards(name){
    let arr = [];
    for(var i = 0; i < name.length; i++){
        arr.push("Thank you, " + name[i] +  ", for the wonderful surprise gift!");
    }
    return arr;

}

function countDown(num){

    while (num >= 0) {
        console.log(num);
        num--;
    }



}
