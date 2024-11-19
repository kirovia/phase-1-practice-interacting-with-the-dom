
// grabbing some elements from the DOM

let counter = 0
const counterDisplay = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const form = document.getElementById('comment-form');
const input = document.getElementById('comment-input');
const submit = document.getElementById('submit');

// counter functionality

setInterval(() => {
    counter += 1;
    counterDisplay.innerText = counter;
}, 1000);