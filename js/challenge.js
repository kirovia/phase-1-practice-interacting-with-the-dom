
// grabbing some elements from the DOM

let counter = 0
const counterDisplay = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.querySelector('.likes');
const comments = document.getElementById('list');
const form = document.getElementById('comment-form');
const input = document.getElementById('comment-input');
const submit = document.getElementById('submit');
let likesCounterObject = {};
let tester;

// counter functionality

document.addEventListener('DOMContentLoaded', () => {
    tester = setInterval(() => {counter += 1;counterDisplay.innerText = counter;}, 1000)
})

// manually increment & decrement counter

minus.addEventListener('click', () => {counter -= 1; counterDisplay.innerText = counter});
plus.addEventListener('click', () => {counter += 1; counterDisplay.innerText = counter});

// heart button

heart.addEventListener('click', () => {
    let allLikes = likes.children;
    likesCounterObject[`${counter}`] ? likesCounterObject[`${counter}`] += 1 : likesCounterObject[`${counter}`] = 1;
    const li = document.createElement('li');
    li.setAttribute('name', `${counter}`);
    li.innerText = `${counter} has been liked ${likesCounterObject[`${counter}`]} times`;
    if (!!allLikes.namedItem(`${counter}`)) {
        allLikes.namedItem(`${counter}`).innerText = `${counter} has been liked ${likesCounterObject[`${counter}`]} times`;
    } else {
        likes.append(li);
    }
});

// pause button

pause.addEventListener('click', () => {
    if (pause.innerText === 'pause') {
        pause.innerText = 'resume';
        clearInterval(tester);
        tester = null;
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
    } else {
        tester = setInterval(() => {counter += 1;counterDisplay.innerText = counter;}, 1000);
        pause.innerText = 'pause';
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
    }        
});

// comments function

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    p.innerText = input.value;
    comments.append(p);
    input.value = '';
});