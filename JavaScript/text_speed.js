var prompt = require('prompt-sync')();
let sentence = "I love programming"
console.log(`Type the following sentence....:${sentence}\n`)
let startTime = new Date();
var user_input = prompt("Start typing>>>")
let endTime = new Date();

let time_taken = (endTime-startTime)/1000;
let time_in_minutes = time_taken/60;

let number_of_words = sentence.trim().split(" ").length;

let wpm = number_of_words/time_in_minutes

console.log(`Time taken is ${time_taken} seconds`)
console.log(`Words per minute(wpm) is ${wpm}`)











