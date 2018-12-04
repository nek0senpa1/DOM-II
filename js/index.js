// Your code goes here
const contain = document.querySelector('.container');
const topLogo = document.querySelector('.logo-heading');
const navs = document.querySelectorAll('.nav-link');
const intro = document.querySelector('.intro');
const content = document.querySelector('.content-section');
const text1 = document.querySelector('.content-section .text-content');
const img = document.querySelectorAll('.img-content');
const inverseStuff = document.querySelector('.inverse-content');
const button = document.querySelectorAll('.btn');
const pully = document.querySelector('.dragtarget');

topLogo.addEventListener('mouseover', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    e.target.style.color = 'yellow';
});

navs[0].addEventListener('click', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    e.target.style.color = 'red';
    contain.style.backgroundColor = "pink";
});

navs[1].addEventListener('click', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    e.target.style.color = 'green';
    contain.style.backgroundColor = "#6fdb78";
});

navs[2].addEventListener('click', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    e.target.style.color = 'blue';
    contain.style.backgroundColor = "#74b3db";
});

navs[3].addEventListener('click', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    e.target.style.color = 'purple';
    contain.style.backgroundColor = "#7676db";
});

img[0].addEventListener('dblclick', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    e.target.src = "img/fun.jpg";
});

img[1].addEventListener('dblclick', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    e.target.src = "img/adventure.jpg";
});

pully.addEventListener('dragstart', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    e.target.src = "img/destination2.jpg";
});

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert('DUDE, TAKE A VACATION! You nearly fell asleep on your keyboard, and are pressing :' + 'key: ' + keyName);
});

button[0].addEventListener('click', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    e.target.textContent = "UR N4 VACATION!";
});

button[1].addEventListener('select', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    alert('AHHHHH, I changed my mind. Do not touch me!');
});

button[2].addEventListener('select', function(e) { 
    // Don't do the default behavior in HTML
    e.preventDefault();
    e.target.textContent = "I Don't Like You Either...";
});